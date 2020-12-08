import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { ISearch } from 'src/app/models/search-item.model';
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


  imgSrc = '/assets/img/logo2.png'
  settingToggle = false
  searchParams: ISearch = {
    searchValue: '',
    isDate: true,
    isVision: true,
  }

  constructor(private searchService: SearchService, private authService: AuthService, private router: Router) {

  }


  ngOnInit() {
    this.form = new FormGroup({
      searchValue: new FormControl(this.searchParams.searchValue),
    })
    this.sub = this.form.controls.searchValue.valueChanges
      .pipe(
        filter(value => value.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        this.searchParams.searchValue = value
        this.find()
      })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  find() {
    this.searchService.search(this.searchParams)
  }

  sortDataChange() {
    this.searchParams.isDate = !this.searchParams.isDate
    this.find()

  }
  sortVisionChange() {
    this.searchParams.isVision = !this.searchParams.isVision
    this.find()
  }
  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
