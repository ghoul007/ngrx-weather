import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookmarkState, adpater } from './bookmarks.reducers';
const { selectAll } = adpater.getSelectors()


export const selectBookmarksProperty = createFeatureSelector('bookmark');
export const selectAppBookmarkEntityState = createFeatureSelector<BookmarkState>('bookmark');
export const selectbookmarkList = createSelector(
    selectAppBookmarkEntityState, selectAll
);