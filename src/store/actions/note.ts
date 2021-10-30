// /store/actions/note.ts
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './../mutations/note'
import { State } from './../state'
 
export enum ActionTypes {
  GetNoteItems = 'GET_NOTE_ITEMS',
  SetCreateModal = 'SET_CREATE_MODAL',
  SetEditModal = 'SET_EDIT_MODAL'
}

// /store/actions/note.ts
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}
export type Actions = {
  [ActionTypes.GetNoteItems](context: ActionAugments): void
  [ActionTypes.SetCreateModal](context: ActionAugments): void
  [ActionTypes.SetEditModal](context: ActionAugments): void
}
//action/note.ts
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetNoteItems]({ commit }) {
    commit(MutationType.SetLoading, true)
    await sleep(1000)
    commit(MutationType.SetLoading, false)
    commit(MutationType.SetNotes, [
      {
        id: 1,
        title: 'Create a new programming language',
        description: "The programing language should have full typescript support ",
        createdBy: "Emmanuel John",
        createdOn: "10/30/2021",
        modifiedOn: "10/30/2021",
        category: "H2",
        editing: false
      }
    ])
  },
  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true)
  },
  async [ActionTypes.SetEditModal]({ commit }) {
    commit(MutationType.SetEditModal, {showModal: true, noteId: 1})
  }
}