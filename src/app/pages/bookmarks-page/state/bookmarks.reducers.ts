import { Action, createReducer, on, State } from '@ngrx/store';
import * as fromBookmarksAction from "./bookmarks.actions";
import * as fromHomeAction from '../../home-page/state/home.actions'
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
export interface BookmarkState extends EntityState<Bookmark> {
    // list: any
}

export const adpater = createEntityAdapter<Bookmark>();

const initialState = adpater.getInitialState({
    // list: []
})

const bookmarkReducer = createReducer(
    initialState,
    // on(fromHomeAction.toggleBookmark, (state, { entity }) => ({ ...state, list: toggleBookmark(state.list, entity) })),
    on(fromHomeAction.toggleBookmark, (state, { entity }) => adpater.addOne(entity, state)),
    on(fromBookmarksAction.toggleBookmarkById, (state, { id }) => ({ ...state })),
    // on(fromBookmarksAction.updateBookmarks, (state, { list }) => ({ ...state, list })),
    on(fromBookmarksAction.updateBookmarks, (state, { list }) =>adpater.upsertMany(list, state)),
    on(fromBookmarksAction.removeBookmarks, (state, { id }) =>adpater.removeOne(id, state)),
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