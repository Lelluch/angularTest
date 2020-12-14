import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { zoomIn, zoomOut } from 'ng-animate';
import { IItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
  animations: [
    trigger('itemAnim', [transition('void => *', useAnimation(zoomIn))]),
    trigger('itemAnim', [transition('* => void', useAnimation(zoomOut))])
  ],
})
export class SearchResultItemComponent implements OnInit {

  @Input() item!: IItem;


  constructor() { }

  ngOnInit(): void {
  }

}
