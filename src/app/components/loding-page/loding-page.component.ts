import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, IStorageUser } from '../servises/auth.service';

@Component({
  selector: 'app-loding-page',
  templateUrl: './loding-page.component.html',
  styleUrls: ['./loding-page.component.scss']
})
export class LodingPageComponent implements OnInit {

  loginName = ''
  password = ''

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const user: IStorageUser = this.authService.getUser()
    this.loginName = user.loginName
    this.password = user.password

  }

  loginValue(event: any) {
    this.loginName = event.target.value
  }

  passwordValue(event: any) {
    this.password = event.target.value
  }

  login() {
    if (this.loginName.trim() && this.password.trim()) {
      this.authService.login(this.loginName, this.password)
      this.router.navigate(['/'])

    }
  }

}
