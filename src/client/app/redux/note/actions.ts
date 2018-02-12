import { createAction } from 'typesafe-actions'

import {
  CREATE_ONE_NOTE,
  UPDATE_NEW_NOTE,
} from './types'

export const createOneNote = createAction(CREATE_ONE_NOTE,
    () => ({
      type: CREATE_ONE_NOTE,
      payload: {
      },
    }),
)

export const updateNewNote = createAction(UPDATE_NEW_NOTE,
    (field: string, value: string) => ({
      type: UPDATE_NEW_NOTE,
      payload: {
        field,
        value,
      },
    }),
)
