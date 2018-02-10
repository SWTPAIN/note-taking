import { Note } from '../models/note'
import { INote } from '../types/note'

export function createNote(title: string, body: string): Promise<INote> {
  return new Note({title, body}).save()
}
