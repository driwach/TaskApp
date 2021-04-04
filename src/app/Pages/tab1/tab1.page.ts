import { Component } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public taskService: TasksService, private router: Router, private  alertCtl: AlertController) {

  }
  async  addList(){
    // this.router.navigateByUrl('/tabs/tab1/add');
      const alert = await this.alertCtl.create({
        header: 'New task',
       inputs: [
         {
           name: 'title',
           type: 'text',
           placeholder: 'Name of task'
         }
       ],
        buttons: [
            {
            text: 'Cancel',
             role: 'cancel',
              handler:  () => {
              }
              },
          {
            text: 'Create',
            handler:  ( data ) => {
              if (data === 0){
                return;
              }
              const id = this.taskService.createList(data.title);
              this.router.navigateByUrl(`/tabs/tab1/add/${ id }`);

            }
          }
        ]
      });

      await alert.present();
    }


  }



