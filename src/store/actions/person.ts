// /store/actions/person.ts
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './../mutations/person'
import { State } from './../state'
 
export enum ActionTypes {
  GetPeople  = 'GET_PEOPLE',
  SetCreateModal = 'SET_CREATE_MODAL',
  SetEditModal = 'SET_EDIT_MODAL'
}

// /store/actions/person.ts
type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}
export type Actions = {
  [ActionTypes.GetPeople](context: ActionAugments): void
  [ActionTypes.SetCreateModal](context: ActionAugments): void
  [ActionTypes.SetEditModal](context: ActionAugments): void
}
//action/person.ts
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetPeople]({ commit }) {
    commit(MutationType.SetLoading, true)
    await sleep(1000)
    commit(MutationType.SetLoading, false)
    commit(MutationType.SetPeople, [
      {
        id: number;
        name: string;
        email: string;
        password: string;
        passwordEncrypted: boolean;
        editing: boolean;
        active: boolean;
        gender: string;
        createdBy: string;
        createdOn: string;
        modifiedOn: string;
        notes: [{
          id: string;
          title: string;
          note: string;
          category: string;
          dateCreated: string;
        }]
        todo:  [{
          id: string;
          title: string;
          editing: boolean;
          description:string;
          dateCreated: string;
        }]
            }
    ])
  },
  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true)
  },
  async [ActionTypes.SetEditModal]({ commit }) {
    commit(MutationType.SetEditModal, {showModal: true, personId: 1})
  }
}