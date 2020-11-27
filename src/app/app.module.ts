import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {DemoMaterialModule} from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultItemComponent } from './components/search/search-result-item/search-result-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsBlockComponent } from './components/search/search-results-block/search-results-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultItemComponent,
    SearchResultsBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers:  [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
