import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookmarkState } from './bookmarks.reducers';
export const selectBookmarksProperty = createFeatureSelector('bookmark');


export const selectbookmarkList = createSelector(
    selectBookmarksProperty,
    (state: BookmarkState, props) => state.list
);