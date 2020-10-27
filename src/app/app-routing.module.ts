import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksPageComponent } from './bookmarks-page/bookmarks-page.component';


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
