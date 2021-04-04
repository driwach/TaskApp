import { Injectable } from '@angular/core';
import {Liste} from '../models/liste.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  liste: Liste[] = [] ;

  constructor() {
    this.loadStorage();
   // const liste1 = new Liste('Recolectar pierdas del infinito');
    // const liste2 = new Liste(' del infinito');
    // this.liste.push(liste1, liste2);
    console.log(this.liste);

  }

  createList(title: string){
    const newList = new Liste(title);
    this.liste.push(newList);
    this.saveStorage();
    return newList.id;
  }
  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.liste));
  }
  loadStorage(){
    if (localStorage.getItem('data')){
    this.liste = JSON.parse(localStorage.getItem('data'));
    }
  }

  getList(id: string | number) {
    id = Number(id);
    return this.liste.find( data =>  data.id === id);
  }

  deleteTask(list: Liste){
    this.liste = this.liste.filter(l => {
      return l.id !== list.id;
    });
    this.saveStorage();

  }

}
