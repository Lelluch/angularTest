import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/search-item.model';

@Pipe({
  name: 'visionSort'
})
export class VisionSortPipe implements PipeTransform {

  transform(items: IItem[], sort: boolean): any {
    if (items.length) {
      const dataSort = items.sort((a, b) => {
        return Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
      })
      return sort ? dataSort : dataSort.reverse()
    }
    return items
  }
}
