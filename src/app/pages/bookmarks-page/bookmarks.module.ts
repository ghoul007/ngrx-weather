import { ComponentsModule } from './../../shared/components/components.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './containers/bookmarks/bookmarks-page';
import { BookmarkEffects } from './state/bookmarks.effects';
import { reducer } from './state/bookmarks.reducers';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookmarksPage],
  exports: [BookmarksPage],
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
