import { cleanDatabase, ensureDBConnection } from '../../../test/server/helper'
import { createNote } from './note'

beforeAll(ensureDBConnection)
afterAll(cleanDatabase)

describe('Note Service Test', () => {
  test('createNote test', async () => {
    const title = 'Title'
    const body = 'Body'
    const note = await createNote(title, body)
    expect(note.title).toEqual(title)
  })
})
