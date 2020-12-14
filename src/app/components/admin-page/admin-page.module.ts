import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material.module';
import { SharedPageModule } from 'src/app/shared/shared.module';
import { AdminPageComponent } from './admin-page.component';

@NgModule({
    declarations:[
        AdminPageComponent
    ],
    imports:[
        SharedPageModule,
        CommonModule,
        DemoMaterialModule,
        RouterModule.forChild([
            { path: '', component: AdminPageComponent },
        ])
    ],
    exports:[RouterModule]
})
export class AdminPageModule{

}