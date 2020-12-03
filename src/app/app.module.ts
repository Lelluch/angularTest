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
import { StyleDirective } from './directives/style.directive';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { DataSortPipe } from './pipes/data-sort.pipe';
import { VisionSortPipe } from './pipes/vision-sort.pipe';
import { LodingPageComponent } from './components/loding-page/loding-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { ItemsService } from './components/servises/items.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultItemComponent,
    SearchResultsBlockComponent,
    StyleDirective,
    SearchFilterPipe,
    DataSortPipe,
    VisionSortPipe,
    LodingPageComponent,
    ErrorPageComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule
  ],
  providers:  [
    ItemsService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
