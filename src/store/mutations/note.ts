import { MutationTree } from 'vuex'
import { State, NoteItem } from '../state'
 
export enum MutationType {
  CreateNote = 'CREATE_NOTE',
  SetNotes = 'SET_NOTES',
  CompleteNote = 'COMPLETE_NOTE',
  RemoveNote = 'REMOVE_NOTE',
  EditNote = 'EDIT_NOTE',
  UpdateNote = `UPDATE_NOTE`,
  SetLoading = 'SET_LOADING',
  SetCreateModal = 'SET_CREATE_MODAL',
  SetEditModal = 'SET_EDIT_MODAL',
  SetNoteModal = 'SET_NOTE_MODAL',

}
export type Mutations = {
  [MutationType.CreateNote](state: State, note: NoteItem): void
  [MutationType.SetNotes](state: State, notes: NoteItem[]): void
  [MutationType.CompleteNote](
    state: State,
    note: Partial<NoteItem> & { id: number }
  ): void
  [MutationType.RemoveNote](
    state: State,
    note: Partial<NoteItem> & { id: number }
  ): void
  [MutationType.EditNote](
    state: State,
    note: Partial<NoteItem> & { id: number }
  ): void
  [MutationType.UpdateNote](
    state: State,
    note: Partial<NoteItem> & { id: number }
  ): void

  [MutationType.SetLoading](state: State, value: boolean): void
  [MutationType.SetCreateModal](state: State, value: boolean): void
  [MutationType.SetEditModal](state: State, value: {showModal: boolean, noteId: number|undefined}): void
  [MutationType.SetNoteModal](state: State, value: {showModal: boolean, noteId: number|undefined}): void
  
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateNote](state, note) {
    state.notes.unshift(note)
  },
  [MutationType.SetNotes](state, notes) {
    state.notes = notes
  },
  [MutationType.CompleteNote](state, newNote) {
    const note = state.notes.findIndex(element => element.id === newNote.id)
    if (note === -1) return
    state.notes[note] = { ...state.notes[note], ...newNote }
  },
  [MutationType.RemoveNote](state, Note) {
    const note = state.notes.findIndex(element => element.id === Note.id)
    if (note === -1) return
    //If Note exist in the state, remove it
    state.notes.splice(note, 1) 
  },
  [MutationType.EditNote](state, Note) {
    const note = state.notes.findIndex(element => element.id === Note.id)
    if (note === -1) return
    //If Note exist in the state, toggle the editing property
    state.notes[note] = { ...state.notes[note], editing: !state.notes[note].editing } 
    console.log("noteino", state.notes[note])
  },
  [MutationType.UpdateNote](state, Note) {
    state.notes = state.notes.map(note => {
      if(note.id === Note.id) {
        return {...note, ...Note}
      }
      return note;
    })
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value
    console.log("I am loading...")
  },
  [MutationType.SetCreateModal](state, value) {
    state.showCreateModal = value
  },
  [MutationType.SetEditModal](state, value) {
    state.showEditModal = value.showModal
    state.editModalNoteId = value.noteId
  },
  [MutationType.SetNoteModal](state, {showModal, noteId}) {
    state.showNoteModal = showModal
    state.showNoteId = noteId
  }
}