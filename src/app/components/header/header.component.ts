import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearch } from 'src/app/models/search-item.model';
import { AuthService } from '../servises/auth.service';
import { SearchService } from '../servises/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
    
  }

  input(event: any) {
    this.searchParams.searchValue = event.target.value
  }

  find() {
    this.searchService.search(this.searchParams)
  }

  sortDataChange() {
    this.searchParams.isDate = !this.searchParams.isDate
    this.searchService.search(this.searchParams)

  }
  sortVisionChange() {
    this.searchParams.isVision = !this.searchParams.isVision
    this.searchService.search(this.searchParams)
  }
  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
