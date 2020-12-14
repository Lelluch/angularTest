import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICustomItem } from 'src/app/models/search-item.model';
import { CreateCustomItem } from 'src/app/store/app.actions';
import { IState } from 'src/app/store/app.state';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  form!: FormGroup

  constructor(private store: Store<IState>, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imgSrc: new FormControl('', Validators.required),
      linkVideo: new FormControl('', Validators.required),
    })
  }

  addCard() {
    if (this.form.valid) {
      const customItem: ICustomItem = { ...this.form.value, date: new Date(), id: `customItem-${Math.floor(Math.random() * 100)}` }

      this.store.dispatch(CreateCustomItem({
        customItem: {
          ...customItem
        }
      }))
      this.router.navigate(['/home'])
    }
  }
}
