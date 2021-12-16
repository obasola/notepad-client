import { createLogger, createStore } from 'vuex'
import {CategoryModel, NoteModel, PersonModel} from "../models";
import NoteRepository from "../service/NoteRepository";
import CategoryRepository  from '@/service/CategoryRepository';
import PersonRepository from '@/service/PersonRepository';

import { defineStore } from "pinia";

export type RootState = {
  category: CategoryModel;
  categories: CategoryModel[];
  note: NoteModel;
  notes: NoteModel[];
  person: PersonModel;
  people: PersonModel[];
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      note: {},
      notes: [],
      person: {},
      people: [],
      category: {},
      categories: [],
    } as RootState),

  actions: {
    createNewCategory(category: CategoryModel) {
      if (!category) return;

      this.categories.push(category);
    },
    createNewNote(note: NoteModel) {
      if (!note) return;

      this.notes.push(note);
    },
    createNewPerson(person: PersonModel) {
      if (!person) return;

      this.people.push(person);
    },

    findAllCategories() {
      this.categories.push(CategoryRepository.getAll() );
    },

    findAllNotes() {
      this.notes.push(NoteRepository.getAll() );
    },

    findAllPeople() {
      this.people.push(PersonRepository.getAll() );
    },

    updateCategory(id: number, payload: CategoryModel) {
      if (!id || !payload) return;

      const index = this.findCategoryIndexById(id.toString());

      if (index !== -1) {
        this.$state.category = payload;
        this.categories[index] = CategoryRepository.update(id,payload);
      }
    },

    updateNote(id: number, payload: NoteModel) {
      if (!id || !payload) return;

      const index = this.findNoteIndexById(id.toString());

      if (index !== -1) {
        this.$state.note = payload;
        this.notes[index] = NoteRepository.update(id,payload);
      }
    },

    updatePerson(id: number, payload: PersonModel) {
      if (!id || !payload) return;

      const index = this.findPersonIndexById(id.toString());

      if (index !== -1) {
        this.$state.person = payload;
        this.people[index] = PersonRepository.update(id,payload);
      }
    },

    deleteNote(id: number) {
      const index = this.findNoteIndexById(id.toString());

      if (index === -1) return;

      this.notes.splice(index, 1);
    },

    findCategoryIndexById(id: string) {
      return this.categories.findIndex((category) => category.id === id);
    },

    findNoteIndexById(id: string) {
      return this.notes.findIndex((note) => note.id === id);
    },

    findPersonIndexById(id: string) {
      return this.people.findIndex((person) => person.id === id);
    },
  },
});
