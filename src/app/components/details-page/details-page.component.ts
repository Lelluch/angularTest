import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../servises/items.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  item!:any

  constructor(private route:ActivatedRoute, private itemsService:ItemsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
     this.item= this.itemsService.getById(params.id)
    })
  }

}
