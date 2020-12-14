import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AddCustomItem, CreateCustomItem, LoadList, SetList } from './app.actions';
import { ItemsService } from '../components/servises/items.service';
import { IResponse } from '../models/search-item.model';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private itemsService: ItemsService) { }

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadList),
      mergeMap((payload) =>
        this.itemsService
          .getItems(payload.search)
          .pipe(map((result: IResponse) => SetList({ items: result.items }))),
      ),
    ),
  );


  CreateCustomItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateCustomItem),
      switchMap((payload) => {
        if (localStorage.getItem('customItems')) {
          let items = JSON.parse(`${localStorage.getItem('customItems')}`);
          items = [...items, payload.customItem];
          localStorage.setItem('customItems', JSON.stringify(items));
        } else {
          let items = [payload.customItem];
          localStorage.setItem('customItems', JSON.stringify(items));
        }
        return of(AddCustomItem({ customItem: payload.customItem }));
      }),
    ),
  );
}
