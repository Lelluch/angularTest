import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomItem, IItem, ISearch } from 'src/app/models/search-item.model';
import { IState } from 'src/app/store/app.state';
import { SearchService } from '../../servises/search.service';
import { Store } from '@ngrx/store';
import { getCustomItems, getItems, getLoading } from 'src/app/store/app.selectors';
import { map } from 'rxjs/operators';
import { SetLoading } from 'src/app/store/app.actions';


@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})
export class SearchResultsBlockComponent implements OnInit {

  searchParams!: ISearch
  dataIds: number[] = []

  isLoading$!: Observable<boolean>

  items$!: Observable<IItem[]>
  customItems$!: Observable<ICustomItem[]>

  constructor(private searchService: SearchService, private store: Store<IState>) {

  }

  ngOnInit(): void {
    this.searchParams = this.searchService.searchParams
    this.isLoading$ = this.store.select(getLoading)
    this.items$ = this.store.select(getItems).pipe(map(items => {
      this.store.dispatch(SetLoading({ isLoading: false }))
      return [...items]
    }))
    this.customItems$ = this.store.select(getCustomItems).pipe(map(customItems => [...customItems]))
  }

}
