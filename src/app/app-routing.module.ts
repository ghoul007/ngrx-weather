import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksPageComponent } from './pages/bookmarks-page/containers/bookmarks/bookmarks-page.component';
import { HomePageComponent } from './pages/home-page/containers/home/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'bookmarks', component: BookmarksPageComponent },
  { path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
