// store/getters.ts
import { GetterTree } from 'vuex'
import { State, Person } from './../state'

export type Getters = {
  totalPersonCount(state: State): number
  getPersonById(state: State): (id :number) => Person | undefined
}

export const getters: GetterTree<State, State> & Getters = {
  totalPersonCount(state) {
    return state.people.length
  },
  getPersonById: (state) => (id: number) => {
    return state.people.find(person => person.id === id)
  }
}