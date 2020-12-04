import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { SharedPageModule } from 'src/app/shared/shared.module';
import { DetailsPageComponent } from './details-page.component';

@NgModule({
    declarations:[
        DetailsPageComponent
    ],
    imports:[
        SharedPageModule,
        CommonModule,
        DemoMaterialModule,
        RouterModule.forChild([
            { path: '', component: DetailsPageComponent },
        ])
    ],
    exports:[RouterModule]
})
export class DetailsPageModule{

}