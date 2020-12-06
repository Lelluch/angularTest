import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, IStorageUser } from '../servises/auth.service';

@Component({
  selector: 'app-loding-page',
  templateUrl: './loding-page.component.html',
  styleUrls: ['./loding-page.component.scss']
})
export class LodingPageComponent implements OnInit {

  form!: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const user: IStorageUser = this.authService.getUser()
    this.form = new FormGroup({
      loginName: new FormControl(user.loginName, Validators.required),
      password: new FormControl(user.password, Validators.required),
    })
  }

  login() {
    if (this.form.valid) {
      const value = { ...this.form.value }
      this.authService.login(value.loginName, value.password)
      this.router.navigate(['/home'])
    }
  }

}
