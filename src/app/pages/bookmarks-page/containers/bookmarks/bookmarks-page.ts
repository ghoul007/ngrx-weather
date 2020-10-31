import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { BookmarkState } from '../../state/bookmarks.reducers';

import * as fromBookmarksSelectors from '../../state/bookmarks.selectors'
import * as fromBookmarksActions from '../../state/bookmarks.actions'
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-bookmarks-page',
  templateUrl: './bookmarks-page.html',
  styleUrls: ['./bookmarks-page.scss']
})
export class BookmarksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]>;
  searchTypeaheadControl = new FormControl(undefined);

  constructor(private store: Store<BookmarkState>) {
  }

  ngOnInit(): void {
    this.bookmarks$ = this.store.pipe(select(fromBookmarksSelectors.selectbookmarkList));

    this.searchTypeaheadControl.valueChanges
      .subscribe((value: any) =>
        this.store.dispatch(fromBookmarksActions.toggleBookmarks({ id: value.geonameid }))
      );

  }

  removeBookmark(id) {
    this.store.dispatch(fromBookmarksActions.removeBookmarks({ id }));
  }

}
