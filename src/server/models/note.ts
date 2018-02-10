import { Document, model, Model, Schema } from 'mongoose'
import { INote } from '../types/Note'

export interface INoteModel extends INote, Document {
}

export const noteSchema: Schema = new Schema({
    title: String,
    body: String,
})

export const Note: Model<INoteModel> = model<INoteModel>('Note', noteSchema)
