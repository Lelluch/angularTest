import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/search/search-results-block/search-results-block.module').then(m => m.SearchResultsBlockModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./components/loding-page/loding-page.module').then(m => m.LoadingPageModule) },
  { path: 'details/:id', loadChildren: () => import('./components/details-page/details-page.module').then(m => m.DetailsPageModule), canActivate: [AuthGuard] },
  { path: 'error', loadChildren: () => import('./components/error-page/error-page.module').then(m => m.ErrorPageModule) },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
