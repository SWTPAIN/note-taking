import * as React from 'react'
import { connect } from 'react-redux'
import NoteForm from '../../components/note/form'
import { IRootState } from '../../redux'
import { noteActions, notesSelectors } from '../../redux/note'

interface INoteCenterProps {
  newNote: {
    title: string,
    body: string,
  },
  handleNewNoteChange: (fieldName: string, value: string) => void,
  handleCreateNewNote: () => void,
}

const NoteCenter = (props: INoteCenterProps) => {
  const {title, body} = props.newNote

  return (
    <div className="container home">
      <NoteForm
        note={{...props.newNote, id: '-1'}}
        onChange={props.handleNewNoteChange}
        onSave={props.handleCreateNewNote}
      />
    </div>
  )
}

const mapStateToProps = (state: IRootState) => ({
  newNote: notesSelectors.getNewNote(state),
})
export const NoteCenterContainer = connect(
  mapStateToProps,
  {
    handleCreateNewNote: noteActions.createOneNote,
    handleNewNoteChange: noteActions.updateNewNote,
  })(NoteCenter)
