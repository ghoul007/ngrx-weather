import { ComponentsModule } from './../../shared/components/components.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPageComponent } from './containers/bookmarks/bookmarks-page.component';
import { BookmarkEffects } from './state/bookmarks.effects';
import { reducer } from './state/bookmarks.reducers';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookmarksPageComponent],
  exports: [BookmarksPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bookmark', reducer),
    EffectsModule.forFeature([BookmarkEffects]),
    ComponentsModule
  ]
})
export class BookmarksModule { }
