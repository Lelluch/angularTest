import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { IItem, ISearch } from 'src/app/models/search-item.model';
import { ItemsService } from '../../servises/items.service';
import { SearchService } from '../../servises/search.service';


@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})
export class SearchResultsBlockComponent implements OnInit, OnDestroy {

  sub!: Subscription
  searchParams!: ISearch
  dataIds: number[] = []

  isLoading: boolean = false

  items: IItem[] = []

  constructor(private itemsService: ItemsService, private searchService: SearchService) {

  }


  ngOnInit(): void {
    this.searchParams = this.searchService.searchParams
    const stream$ = new Observable<any>(obs => {

      setInterval(() => {
        obs.next(this.searchService.searchParams.searchValue)
      }, 1000)
    })

    this.sub = stream$
      .pipe(
        distinctUntilChanged(),
        mergeMap(value => {
          this.isLoading = true
          return this.itemsService.getItems(value)
        })
      )
      .subscribe(data => {
        console.log(data);
        this.items = data.items
        this.isLoading = false        
      })

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
