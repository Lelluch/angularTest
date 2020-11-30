import { Component } from '@angular/core';
import { ISearch } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-task';
  search: ISearch = { searchParams: '', isSearch: false, isDate: true, isVision: true }

  updateSearch(event: ISearch) {
    this.search = event
  }
}
