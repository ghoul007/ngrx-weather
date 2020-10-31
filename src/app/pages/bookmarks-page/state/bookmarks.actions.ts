import { Bookmark } from './../../../shared/models/bookmark.model';
import { createAction, props } from '@ngrx/store';

export const removeBookmarks = createAction(
    '[Bookmarks] removeBookmarks',
    props<{id: any}>()

);


export const toggleBookmarkById = createAction(
    '[Bookmarks] toggleBookmarks By ID',
    props<{id: number}>()
);

export const updateBookmarks = createAction(
    '[Bookmarks] updateBookmarks',
    props<{list: Bookmark[]}>()
);