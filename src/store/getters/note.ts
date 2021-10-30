// store/getters.ts
import { GetterTree } from 'vuex'
import { State, NoteItem } from './../state'

export type Getters = {
  totalNoteCount(state: State): number
  getNoteById(state: State): (id :number) => NoteItem | undefined
}

export const getters: GetterTree<State, State> & Getters = {
  totalNoteCount(state) {
    return state.notes.length
  },
  getNoteById: (state) => (id: number) => {
    return state.notes.find(note => note.id === id)
  }
}