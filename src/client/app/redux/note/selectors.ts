import { createSelector } from 'reselect'

import { IRootState } from '../'

export const getNewNote =
    (state: IRootState) => state.notes.newNote
