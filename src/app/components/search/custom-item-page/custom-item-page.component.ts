import { Component, Input, OnInit } from '@angular/core';
import { ICustomItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-custom-item-page',
  templateUrl: './custom-item-page.component.html',
  styleUrls: ['./custom-item-page.component.scss']
})
export class CustomItemPageComponent implements OnInit {

  @Input() customItem!:ICustomItem

  constructor() { }

  ngOnInit(): void {
  }

}
