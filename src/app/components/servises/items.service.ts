import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from "@angular/core";
import { mergeMap } from 'rxjs/operators';
import { IItem, IResponse } from 'src/app/models/search-item.model';
import * as data from 'src/assets/response.json';
import { SearchService } from './search.service';

@Injectable({ providedIn: 'root' })
export class ItemsService implements OnInit {


  url = 'https://www.googleapis.com/youtube/v3'
  APIKey = '?key=AIzaSyC0xL1_pW6C5Ke0Es3pJi9aEjILyhNPKII'

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

  }


  getItems(str: string) {
    return this.http.get<IResponse>(`${this.url}/search${this.APIKey}&type=video&part=snippet&maxResults=4&q=${str}`)
      .pipe(
        mergeMap((data) => {
          const items: IItem[] = data.items
          const id = items.map(i => i.id.videoId)
          return this.http.get<IResponse>(`${this.url}/videos${this.APIKey}&id=${id}&part=snippet,statistics`)
        })
      )
  }


  getById(id: string) {
    return this.http.get<IResponse>(`${this.url}/videos${this.APIKey}&id=${id}&part=snippet,statistics`)
  }
}