import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
    declarations:[
        ErrorPageComponent
    ],
    imports:[
        CommonModule,
        DemoMaterialModule,
        RouterModule.forChild([
            { path: '', component: ErrorPageComponent },
        ])
    ],
    exports:[RouterModule]
})
export class ErrorPageModule{

}