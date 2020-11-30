import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: IItem[], search: string = ''): any {
    return items.filter(item => item.snippet.channelTitle.toLowerCase().includes(search.toLowerCase()))
  }

}
