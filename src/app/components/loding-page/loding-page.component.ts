import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetUser } from 'src/app/store/app.actions';
import { IState } from 'src/app/store/app.state';
import { AuthService, IStorageUser } from '../servises/auth.service';

@Component({
  selector: 'app-loding-page',
  templateUrl: './loding-page.component.html',
  styleUrls: ['./loding-page.component.scss']
})
export class LodingPageComponent implements OnInit {

  form!: FormGroup

  constructor(private authService: AuthService, private router: Router, private store: Store<IState>) { }

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
      this.store.dispatch(SetUser({ user: value.loginName }))
      this.router.navigate(['/home'])
    }
  }

}
