import * as React from 'react'
import { Note } from '../../../types/note'
import { Button, Input } from '../common/form'

interface Props {
  note: Note
  onChange?: (fieldName: string, value: string) => void
  onSave?: () => void
}

const NoteForm: React.StatelessComponent<Props> = (props) =>
  (
    <form>
      <Input
        name="title"
        label="Note Title"
        placeholder="What's your new note title?"
        value={props.note.title}
        onChange={props.onChange}
      />
      <Input
        name="body"
        label="Note body"
        placeholder="What's your new note body?"
        value={props.note.body}
        onChange={props.onChange}
      />
      <Button
        label="Save"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  )

export default NoteForm
