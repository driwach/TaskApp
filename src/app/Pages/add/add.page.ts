import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {ActivatedRoute} from '@angular/router';
import {Liste} from '../../models/liste.model';
import {ListeItem} from '../../models/lista-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  nom: string;

  liste: Liste;
  constructor( private task: TasksService, private route: ActivatedRoute) {
    const listid = this.route.snapshot.paramMap.get('listId');
    this.liste = this.task.getList(listid);
  }

  ngOnInit() {
  }

  public addItem(): string {
    if (this.nom.length === 0) {

      return this.nom;
    }

    const  newItem = new ListeItem(this.nom);
    this.liste.items.push( newItem);
    this.nom = '';
    this.task.saveStorage();
  }

  changeCheck(item: ListeItem) {
    const pend = this.liste.items.filter(itemData => !itemData.completed).length;
    if (pend === 0){
      this.liste.finishedEn = new Date();
      this.liste.finished = true;
    }else {
      this.liste.finishedEn = null;
      this.liste.finished = false;
    }
    this.task.saveStorage();
  }

  delete(index: number): void{
     this.liste.items.splice( index, 1 );
     this.task.saveStorage();
  }
}
