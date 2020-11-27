import { Component, Input, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() item!: IItem;
  

  constructor() { }

  ngOnInit(): void { 
    
  }

}
