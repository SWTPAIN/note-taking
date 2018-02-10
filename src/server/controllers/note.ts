import { createNote } from '../services/note'

export function getNotes(req, res) {
  res.status(200).send([])
}

export function postNote(req, res) {
  const note = createNote('ok', 'bye')
  res.status(200).send(note)
}
