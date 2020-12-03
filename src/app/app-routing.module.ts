import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LodingPageComponent } from './components/loding-page/loding-page.component';
import { SearchResultsBlockComponent } from './components/search/search-results-block/search-results-block.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: SearchResultsBlockComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LodingPageComponent },
  { path: 'details/:id', component: DetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
