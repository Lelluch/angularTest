import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleDirective } from '../directives/style.directive';
import { DataSortPipe } from '../pipes/data-sort.pipe';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { VisionSortPipe } from '../pipes/vision-sort.pipe';

@NgModule({
    declarations: [
        StyleDirective,
        SearchFilterPipe,
        DataSortPipe,
        VisionSortPipe,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        StyleDirective,
        SearchFilterPipe,
        DataSortPipe,
        VisionSortPipe,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedPageModule {

}