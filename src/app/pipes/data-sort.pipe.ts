import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item.model';

@Pipe({
  name: 'dataSort'
})
export class DataSortPipe implements PipeTransform {

  transform(items: IItem[], sort: boolean): any {
    if (items.length) {
      const dataSort = items.sort((a, b) => {
        return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
      })
      return sort ? dataSort : dataSort.reverse()
    }
    return items
  }
}
