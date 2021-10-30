import { MutationTree } from 'vuex'
import { State, Category } from '../state'
 
export enum MutationType {
  CreateCategory = 'CREATE_PERSON',
  SetCategories = 'SET_CATEGORIES',
  CompleteCategory = 'COMPLETE_PERSON',
  RemoveCategory = 'REMOVE_PERSON',
  EditCategory = 'EDIT_PERSON',
  UpdateCategory = `UPDATE_PERSON`,
  SetLoading = 'SET_LOADING',
  SetCreateModal = 'SET_CREATE_MODAL',
  SetEditModal = 'SET_EDIT_MODAL',
  SetCategoryModal = 'SET_PERSON_MODAL',

}
export type Mutations = {
  [MutationType.CreateCategory](state: State, category: Category): void
  [MutationType.SetCategories](state: State, people: Category[]): void
  [MutationType.CompleteCategory](
    state: State,
    category: Partial<Category> & { id: number }
  ): void
  [MutationType.RemoveCategory](
    state: State,
    category: Partial<Category> & { id: number }
  ): void
  [MutationType.EditCategory](
    state: State,
    category: Partial<Category> & { id: number }
  ): void
  [MutationType.UpdateCategory](
    state: State,
    category: Partial<Category> & { id: number }
  ): void

  [MutationType.SetLoading](state: State, value: boolean): void
  [MutationType.SetCreateModal](state: State, value: boolean): void
  [MutationType.SetEditModal](state: State, value: {showModal: boolean, categoryId: number|undefined}): void
  [MutationType.SetCategoryModal](state: State, value: {showModal: boolean, categoryId: number|undefined}): void
  
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateCategory](state, categories) {
    state.categories.unshift(categories)
  },
  [MutationType.SetCategories](state, categories) {
    state.categories = categories
  },
  [MutationType.CompleteCategory](state, newCategory) {
    const category = state.categories.findIndex(element => element.id === newCategory.id)
    if (category === -1) return
    state.categories[category] = { ...state.categories[category], ...newCategory }
  },
  [MutationType.RemoveCategory](state, Category) {
    const category = state.people.findIndex(element => element.id === Category.id)
    if (category === -1) return
    //If Category exist in the state, remove it
    state.people.splice(category, 1) 
  },
  [MutationType.EditCategory](state, Category) {
    const category = state.people.findIndex(element => element.id === Category.id)
    if (category === -1) return
    //If Category exist in the state, toggle the editing property
    state.people[category] = { ...state.people[category], editing: !state.people[category].editing } 
    console.log("people ", state.people[category])
  },
  [MutationType.UpdateCategory](state, Category) {
    state.people = state.people.map(category => {
      if(category.id === Category.id) {
        return {...category, ...Category}
      }
      return category;
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
    state.editModalCategoryId = value.categoryId
  },
  [MutationType.SetCategoryModal](state, {showModal, categoryId}) {
    state.showCategoryModal = showModal
    state.showCategoryId = categoryId
  }
}