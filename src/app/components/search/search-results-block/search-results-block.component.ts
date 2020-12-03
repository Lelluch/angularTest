import { Component, OnInit } from '@angular/core';
import { IItem, ISearch } from 'src/app/models/search-item.model';
import { ItemsService } from '../../servises/items.service';
import {  SearchService } from '../../servises/search.service';


@Component({
  selector: 'app-search-results-block',
  templateUrl: './search-results-block.component.html',
  styleUrls: ['./search-results-block.component.scss']
})
export class SearchResultsBlockComponent implements OnInit {

  searchParams!: ISearch 

  items!: IItem[]  

  constructor(private itemsService:ItemsService,private searchService:SearchService){

  }


  ngOnInit(): void {
    this.items=this.itemsService.getItems()
    this.searchParams=this.searchService.searchParams
  }

}
