import { Pipe, PipeTransform } from '@angular/core';
import {Liste} from '../models/liste.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(lists: Liste[], finished: boolean): Liste[] {
    // tslint:disable-next-line:prefer-for-of

    return  lists.filter(l => {
      return l.finished === finished;
    });
  }

}
