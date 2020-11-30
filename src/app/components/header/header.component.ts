import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface ISearch {
  searchParams: string,
  isSearch: boolean,
  isDate: boolean,
  isVision: boolean
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onSearch: EventEmitter<ISearch> = new EventEmitter<ISearch>()

  imgSrc = '/assets/img/logo2.png'
  settingToggle = false
  searchValue = ''
  isSearch: boolean = false
  isDate: boolean = true
  isVision: boolean = true



  ngOnInit(): void {


  }

  search(event: any) {
    this.searchValue = event.target.value
    if (!this.searchValue.trim()) {
      this.isSearch = false
      this.onSearch.emit({
        searchParams: '',
        isSearch: this.isSearch,
        isDate:this.isDate,
        isVision:this.isVision
      })
    }
  }

  find() {
    if (this.searchValue.trim()) {
      this.isSearch = true
      this.onSearch.emit({
        searchParams: this.searchValue,
        isSearch: this.isSearch,
        isDate:this.isDate,
        isVision:this.isVision
      })
    }
  }

  sortDataChange() {
    this.isDate = !this.isDate
    this.onSearch.emit({
      searchParams: this.searchValue,
      isSearch: this.isSearch,
      isDate:this.isDate,
      isVision:this.isVision
    })


  }
  sortVisionChange() {
    this.isVision = !this.isVision
    this.onSearch.emit({
      searchParams: this.searchValue,
      isSearch: this.isSearch,
      isDate:this.isDate,
      isVision:this.isVision
    })
  }

}
