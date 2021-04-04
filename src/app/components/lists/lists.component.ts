import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {Liste} from '../../models/liste.model';
import {Router} from '@angular/router';
import {AlertController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  @Input() finished = true;
  @ViewChild(IonList) ilist: IonList;
  constructor(public taskService: TasksService, private router: Router, private alertCtl: AlertController) { }

  ngOnInit() {}


  selectedList(liste: Liste){
    if (this.finished){
      this.router.navigateByUrl(`/tabs/tab2/add/${ liste.id }`);

    }else {
      this.router.navigateByUrl(`/tabs/tab1/add/${ liste.id }`);

    }
  }

  delete(list: Liste): void{

  this.taskService.deleteTask(list);
  }

  async modify(list: Liste){
    const alert = await this.alertCtl.create({
      header: 'Modify list Element',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'Name of task'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler:  () => {
            this.ilist.closeSlidingItems();
          }
        },
        {
          text: 'Update',
          handler:  ( data ) => {
            if (data.title.length === 0){
              return;
            }
            list.title = data.title;
            this.taskService.saveStorage();
            this.ilist.closeSlidingItems();
          }
        }
      ]
    });

    await alert.present();

  }

}
