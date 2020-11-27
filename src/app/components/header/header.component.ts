import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  imgSrc = '/assets/img/logo2.png'
  settingToggle = false


  ngOnInit(): void {


  }



}
