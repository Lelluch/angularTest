import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { ISearch } from 'src/app/models/search-item.model';
import { LoadList, SetLoading, SetUser } from 'src/app/store/app.actions';
import { getUser } from 'src/app/store/app.selectors';
import { IState } from 'src/app/store/app.state';
import { AuthService } from '../servises/auth.service';
import { SearchService } from '../servises/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  form!: FormGroup
  sub!: Subscription

  user$!: Observable<string>

  imgSrc = '/assets/img/logo2.png'
  settingToggle = false
  searchParams: ISearch = {
    isDate: true,
    isVision: true,
  }

  constructor(private searchService: SearchService, private authService: AuthService, private router: Router, private store: Store<IState>) {

  }


  ngOnInit() {
    this.user$ = this.store.select(getUser)

    this.form = new FormGroup({
      searchValue: new FormControl(''),
    })
    this.sub = this.form.controls.searchValue.valueChanges
      .pipe(
        filter(value => value.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        this.store.dispatch(SetLoading({ isLoading: true }))
        this.store.dispatch(LoadList({ search: value }));
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  sort() {
    this.searchService.search(this.searchParams)
  }

  sortDataChange() {
    this.searchParams.isDate = !this.searchParams.isDate
    this.sort()

  }
  sortVisionChange() {
    this.searchParams.isVision = !this.searchParams.isVision
    this.sort()
  }
  logout() {
    this.authService.logout()
    this.store.dispatch(SetUser({ user: 'Your name' }))
    this.router.navigate(['/login'])
  }
}
