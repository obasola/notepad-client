import { createLogger, createStore } from 'vuex'
import Category from './modules/category'
import Note from './modules/note'
import Person from './modules/person'

export default createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Category,
    Note,
    Person
  }
})
