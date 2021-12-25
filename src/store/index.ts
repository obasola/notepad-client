import { createStore } from 'vuex'
import CategoryRepository from '@/service/CategoryRepository'
import CategoryModel from '@/models/CategoryModel'

export default createStore({
  state: {
    user: 'Adam Jahr',
    categories: [] as CategoryModel[],
    category: null
  },
  mutations: {
    ADD_CATEGORY(state, category) {
      state.categories.push(category)
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_CATEGORY(state, category) {
      state.category = category
    }
  },

  actions: {
    createCategory({ commit }, category) {
      return CategoryRepository.postCategory(category)
        .then(() => {
          commit('ADD_CATEGORY', category)
          commit('SET_CATEGORY', category)
        })
        .catch(error => {
          throw error
        })
    },
    fetchCategories({ commit }) {
      return CategoryRepository.getAllCategories()
        .then(response => {
          commit('SET_CATEGORIES', response.data)
        })
        .catch(error => {
          throw error
        })
    },
    fetchCategory({ commit }, id) {  
      const category = this.state.categories.find(category => category.id === id)
      if (category) {
        commit('SET_CATEGORY', category)
      } else {
        return CategoryRepository.getCategory(id)
          .then(response => {
            commit('SET_CATEGORY', response.data)
          })
          .catch(error => {
            throw error
          })
      }
    }
  }
})
