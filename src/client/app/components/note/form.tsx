import * as React from 'react'

interface Props {
  onChange?: (fieldName: string, value: string) => void
  onSave?: () => void
}

const NoteForm: React.StatelessComponent<Props> = (props) =>
  (
    <form>
      <h1>Create Form</h1>
    </form>
  )

export default NoteForm
