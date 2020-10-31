import { Action, createReducer, on, State } from '@ngrx/store';
import * as fromBookmarksAction from "./bookmarks.actions";
import * as fromHomeAction from '../../home-page/state/home.actions'
import { Bookmark } from 'src/app/shared/models/bookmark.model';

export interface BookmarkState {
    list: any;
}

const initialState = {
    list: []
}

const bookmarkReducer = createReducer(
    initialState,
    on(fromHomeAction.toggleBookmark, (state, {entity} ) => ({ ...state, list: toggleBookmark(state.list, entity)})),
    on(fromBookmarksAction.toggleBookmarkById, (state, {id} ) => ({ ...state})),
    on(fromBookmarksAction.updateBookmarks, (state, { list }) => ({ ...state, list })),
    on(fromBookmarksAction.removeBookmarks, (state, { id }) => ({ ...state, list: state.list.filter(e => e.id !== id) })),
);

function toggleBookmark(list: Bookmark[], entity: Bookmark): Bookmark[] {
    if (!!list.find(bookmark => bookmark.id === entity.id)) {
      return list.filter(bookmark => bookmark.id !== entity.id);
    }
    return [...list, entity];
  }
  
export function reducer(state: BookmarkState | undefined, action: Action) {
    return bookmarkReducer(state, action);
}