import { Injectable } from "@angular/core";
import { Subscription, Observable } from 'rxjs';
import { ISearch } from 'src/app/models/search-item.model';

@Injectable({ providedIn: 'root' })
export class SearchService {

    searchParams: ISearch = {
        searchValue: '',
        isDate: true,
        isVision: true,
    }

    constructor() {
    }

    search(searchParams: ISearch) {
        this.searchParams.searchValue = searchParams.searchValue
        this.searchParams.isDate = searchParams.isDate
        this.searchParams.isVision = searchParams.isVision
    }

}