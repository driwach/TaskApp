import { Injectable } from '@angular/core';
import {Liste} from '../models/liste.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  liste: Liste[] = [] ;

  constructor() {
    console.log("started");
  }
}
