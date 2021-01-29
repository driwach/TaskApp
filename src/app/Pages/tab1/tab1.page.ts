import { Component } from '@angular/core';
import {TasksService} from '../../services/tasks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public taskService: TasksService ) {

  }

}
