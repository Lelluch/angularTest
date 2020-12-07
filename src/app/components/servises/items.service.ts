import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IItem, IResponse } from 'src/app/models/search-item.model';
import * as data from 'src/assets/response.json';

@Injectable({ providedIn: 'root' })
export class ItemsService implements OnInit {


    url = 'https://www.googleapis.com/youtube/v3'
    APIKey = '?key=AIzaSyB8VOkiCFEaMCl_aihOAJMEBnBuf3g1EQM'

    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {

    }


    getItems() {
        return this.http.get<IResponse>(`${this.url}/search${this.APIKey}&type=video&part=snippet&maxResults=15&q=js`)
        .pipe(
            map((data, index) => {
              const items: IItem[] = data.items
              const id = items.map(i => i.id.videoId)
            //   console.log(`${this.url}/videos${this.APIKey}&id=${id}&part=snippet,statistics`);
              return this.http.get<IResponse>(`${this.url}/videos${this.APIKey}&id=${id}&part=snippet,statistics`)
            })
          )
    }


    getById(id: string) {
        // return this.items.find(item => item.id === id)
    }
}