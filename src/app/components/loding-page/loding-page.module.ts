import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { LodingPageComponent } from './loding-page.component';

@NgModule({
    declarations:[
        LodingPageComponent
    ],
    imports:[
        CommonModule,
        DemoMaterialModule,
        RouterModule.forChild([
            { path: '', component: LodingPageComponent },
        ])
    ],
    exports:[RouterModule]
})
export class LoadingPageModule{

}