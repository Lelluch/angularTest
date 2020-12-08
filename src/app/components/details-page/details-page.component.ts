import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { IItem } from 'src/app/models/search-item.model';
import { ItemsService } from '../servises/items.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  sub!:Subscription
  item!:IItem

  constructor(private route:ActivatedRoute, private itemsService:ItemsService) { }
  
  ngOnInit(): void {
   this.sub = this.route.params
    .pipe(
      mergeMap(params=>{
        return this.itemsService.getById(params.id)
      })
    )
    .subscribe(response=>{
     this.item= response.items[0]
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
