import { routerReducer, RouterState } from 'react-router-redux'
import { combineReducers } from 'redux'
import { INotesState, notesReducer } from './note'

export interface IRootState {
    router: RouterState
    notes: INotesState
}

export const rootReducer = combineReducers<IRootState>({
    router: routerReducer,
    notes: notesReducer,
})
