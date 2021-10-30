import { MutationTree } from 'vuex'
import { State, Person } from '../state'
 
export enum MutationType {
  CreatePerson = 'CREATE_PERSON',
  SetPeople = 'SET_PEOPLE',
  CompletePerson = 'COMPLETE_PERSON',
  RemovePerson = 'REMOVE_PERSON',
  EditPerson = 'EDIT_PERSON',
  UpdatePerson = `UPDATE_PERSON`,
  SetLoading = 'SET_LOADING',
  SetCreateModal = 'SET_CREATE_MODAL',
  SetEditModal = 'SET_EDIT_MODAL',
  SetPersonModal = 'SET_PERSON_MODAL',

}
export type Mutations = {
  [MutationType.CreatePerson](state: State, person: Person): void
  [MutationType.SetPeople](state: State, people: Person[]): void
  [MutationType.CompletePerson](
    state: State,
    person: Partial<Person> & { id: number }
  ): void
  [MutationType.RemovePerson](
    state: State,
    person: Partial<Person> & { id: number }
  ): void
  [MutationType.EditPerson](
    state: State,
    person: Partial<Person> & { id: number }
  ): void
  [MutationType.UpdatePerson](
    state: State,
    person: Partial<Person> & { id: number }
  ): void

  [MutationType.SetLoading](state: State, value: boolean): void
  [MutationType.SetCreateModal](state: State, value: boolean): void
  [MutationType.SetEditModal](state: State, value: {showModal: boolean, personId: number|undefined}): void
  [MutationType.SetPersonModal](state: State, value: {showModal: boolean, personId: number|undefined}): void
  
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreatePerson](state, person) {
    state.people.unshift(person)
  },
  [MutationType.SetPeople](state, people) {
    state.people = people
  },
  [MutationType.CompletePerson](state, newPerson) {
    const people = state.people.findIndex(element => element.id === newPerson.id)
    if (people === -1) return
    state.people[people] = { ...state.people[people], ...newPerson }
  },
  [MutationType.RemovePerson](state, Person) {
    const person = state.people.findIndex(element => element.id === Person.id)
    if (person === -1) return
    //If Person exist in the state, remove it
    state.people.splice(person, 1) 
  },
  [MutationType.EditPerson](state, Person) {
    const person = state.people.findIndex(element => element.id === Person.id)
    if (person === -1) return
    //If Person exist in the state, toggle the editing property
    state.people[person] = { ...state.people[person], editing: !state.people[person].editing } 
    console.log("people ", state.people[person])
  },
  [MutationType.UpdatePerson](state, Person) {
    state.people = state.people.map(person => {
      if(person.id === Person.id) {
        return {...person, ...Person}
      }
      return person;
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
    state.editModalPersonId = value.personId
  },
  [MutationType.SetPersonModal](state, {showModal, personId}) {
    state.showPersonModal = showModal
    state.showPersonId = personId
  }
}