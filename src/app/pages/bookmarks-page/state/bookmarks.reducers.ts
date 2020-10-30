import { Action, createReducer, on, State } from '@ngrx/store';
import * as fromBookmarksAction from "./bookmarks.actions";


export interface BookmarkState {
    list: any;
}

const initialState = {
    list: []
}

const bookmarkReducer = createReducer(
    initialState,
    on(fromBookmarksAction.toggleBookmarks, (state, {id} ) => ({ ...state})),
    on(fromBookmarksAction.updateBookmarks, (state, { list }) => ({ ...state, list })),
    on(fromBookmarksAction.removeBookmarks, (state, { id }) => ({ ...state, list: state.list.filter(e => e.id !== id) })),
);

export function reducer(state: BookmarkState | undefined, action: Action) {
    return bookmarkReducer(state, action);
}