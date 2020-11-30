import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../../../assets/response.json';
import { IItem, IResponse } from 'src/app/models/search-item.model';
import { ISearch } from '../../header/header.component';


@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})
export class SearchResultsBlockComponent implements OnInit {

  @Input() searchParams: ISearch = { searchParams: '', isSearch: false, isDate: true, isVision: true }

  items: IItem[] = data.items
  searchItems!: IItem[]



  ngOnInit(): void {
   
  }


}
