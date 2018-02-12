import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { $call } from 'utility-types'
import { INote } from '../../../types/note'
import * as actions from './actions'

// inferring union type of actions
const returnsOfActions = Object.values(actions).map($call)
export type NotesAction = typeof returnsOfActions[number]

export interface INotesState {
  readonly isFetching: boolean
  readonly errorMessage: string | null
  readonly notes: INote[]
  readonly newNote: INote
}

export type TodosAction = typeof returnsOfActions[number]

export const notesReducer = combineReducers<INotesState>({
  isFetching: (state = false, action) => {
    switch (action.type) {
      default: return state
    }
  },
  notes: (state = [], action) => {
    switch (action.type) {
      case getType(actions.createOneNote):
        return []
      default: return state
    }
  },
  newNote: (state = {title: '', body: ''}, action) => {
    switch (action.type) {
      case getType(actions.updateNewNote):
        return {
          ...state.newNote,
          [action.payload.fieldName]: action.payload.value,
        }
      default: return state
    }
  },
})
