// /store/actions/category.ts
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './../mutations/category'
import { State } from './../state'
 
export enum ActionTypes {
  GetCategories  = 'GET_CATEGORIES',
  SetCreateModal = 'SET_CREATE_MODAL',
  SetEditModal = 'SET_EDIT_MODAL'
}

// /store/actions/category.ts
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}
export type Actions = {
  [ActionTypes.GetCategories](context: ActionAugments): void
  [ActionTypes.SetCreateModal](context: ActionAugments): void
  [ActionTypes.SetEditModal](context: ActionAugments): void
}
//action/category.ts
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetCategories]({ commit }) {
    commit(MutationType.SetLoading, true)
    await sleep(1000)
    commit(MutationType.SetLoading, false)
    commit(MutationType.SetCategories, [
      {
        id: 1,
        code: 'H2',
        description: "How 2 - documentation as short stories",
        createdOn: "10/30/2021",
        modifiedOn: "10/30/2021",
        notes: [{
          id: "",
          title: "",
          note:"",
          editing: false,
          category: "",
          dateCreated:""
        }]
      }
    ])
  },
  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true)
  },
  async [ActionTypes.SetEditModal]({ commit }) {
    commit(MutationType.SetEditModal, {showModal: true, categoryId: 1})
  }
}