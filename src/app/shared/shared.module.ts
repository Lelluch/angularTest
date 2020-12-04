import { NgModule } from '@angular/core';
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

    ],
    exports: [
        StyleDirective,
        SearchFilterPipe,
        DataSortPipe,
        VisionSortPipe,
    ]
})
export class SharedPageModule {

}