import * as React from 'react'
import { Note } from '../../../types/note'
import NoteForm from '../note/form'

interface State {
  note: Note
}

export class HomePageContainer extends React.Component<{}, State> {
  public state = {
    note: {
      id: '-1',
      title: 'Functional Programming 101',
      body: 'Immutability...',
    },
  }

  public render() {
    return (
      <div className="container home">
        <NoteForm
          note={this.state.note}
          onChange={this.handleFieldValueChange}
          onSave={this.handleSaveNote}
        />
      </div>
    )
  }

  private handleFieldValueChange = (fieldName: string, value: string) => {
    const nextState = {
      ...this.state,
      note: {
        ...this.state.note,
        [fieldName]: value,
      },
    }

    this.setState(nextState)
  }

  private handleSaveNote = () => {
    alert(1)
  }

}
export default HomePageContainer
