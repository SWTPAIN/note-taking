import { createOneNote } from './actions'
import { notesReducer } from './reducer'

// Fixtures
const activeTodo = { id: '1', completed: false, title: 'active todo' }
const completedTodo = { id: '2', completed: true, title: 'completed todo' }

const initialState = notesReducer(undefined, {} as any)

describe('Notes Reducer', () => {
  describe('initial state', () => {
    it('should match a snapshot', () => {
      expect(initialState).toMatchSnapshot()
    })
  })
  describe('create one note', () => {
      expect(initialState).toMatchSnapshot()
  })
})
