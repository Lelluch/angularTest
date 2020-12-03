import { Injectable } from "@angular/core";
import { IItem } from 'src/app/models/search-item.model';
import * as data from 'src/assets/response.json';

@Injectable({ providedIn: 'root' })
export class ItemsService {
    items: IItem[] = data.items

    getItems(): IItem[] {
        return this.items
    }

    getById(id: string) {
        console.log(this.items.find(item => item.id === id));
        return this.items.find(item => item.id === id)
    }
}