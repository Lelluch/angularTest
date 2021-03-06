import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { SharedPageModule } from 'src/app/shared/shared.module';
import { CustomItemPageComponent } from '../custom-item-page/custom-item-page.component';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';
import { SearchResultsBlockComponent } from './search-results-block.component';

@NgModule({
    declarations:[
        SearchResultsBlockComponent,
        SearchResultItemComponent,
        CustomItemPageComponent
    ],
    imports:[
        SharedPageModule,
        CommonModule,
        DemoMaterialModule,
        RouterModule.forChild([
            { path: '', component: SearchResultsBlockComponent  },
        ])
    ],
    exports:[RouterModule]
})
export class SearchResultsBlockModule{

}