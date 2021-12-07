/* eslint-disable vue/no-unused-vars */
<template>
  <div class="boxLayout">
    <h3>{{ subtitle }}</h3>

    <form novalidate class="formlayout">
      <div class="mb-3">
        <label
          class="my-form-label"
          style="float: left; margin-left: 0.5em"
          for="Category"
          >Category</label
        >
        <select
          class="form-select"
          v-model="selectedCategory"
          @change="setCategory($event)"
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.desc"
          >
            {{ category.desc }}
          </option>
        </select>
      </div>
      <div class="mb-3" v-if="canShowTitle()">
        <label
          class="my-form-label"
          style="float: left; margin-left: 0.5em"
          for="title"
          >Title</label
        >
        <input
          class="form-control"
          id="title"
          v-model="noteModel.title"
          type="text"
          placeholder="your name"
        />
      </div>
      <div class="mb-3">
        <label
          class="my-form-label"
          style="float: left; margin-left: 0.5em"
          for="desc"
          >Description</label
        >
        <quill-editor id="desc" v-model="noteModel.desc" theme="snow" toolbar="minimal"></quill-editor>
      </div>

      <br />
      <div class="mb-3">
        <button
          @submit.prevent
          @click="addNote()"
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Save
        </button>
        &nbsp;
        <button
          @submit.prevent
          @click="clearForm()"
          v-on:submit.prevent="clearForm()"
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import NoteModel from "../models/NoteModel";
import CategoryRepository from '../service/CategoryRepository';
import NoteModule from "../store/modules/note";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const props = defineProps({
  subtitle: String,
});

const selectedCategory = ref("");
const noteModel = NoteModel;
const categories = ref([]);
const category = ref({
  id: 0,
  code: "",
  desc: "",
  dateModified: new Date(),
  dateRecorded: new Date(),
});

loadCategorySelectList();


async function loadCategorySelectList() {

  CategoryRepository.getAll()
    .then((response) => {
      categories.value = response.data;
      console.log(response.data);
      //return this.categories;
    })
    .catch((e) => {
      console.log(e);
    });

}
function setCategory(event: Event) {
  //alert("selectedCategory =  "+ event.target);
  this.selectedCategory.value = event.target;
  //alert("selectedCategory =  "+ selectedCategory.value);
}

function canShowTitle() {
  let rc = true;

  if (selectedCategory.value === "TO") {
    rc = false;
  }
  //alert("return value = "+ rc);
  return rc;
}

function addNote() {
  alert("AddNote: entrypoint: selectedCategory = "+this.selectedCategory);
  console.log("NoteModel = "+this.NoteModel);
 // alert("Note"+this.NoteModel);
  NoteModel.personId = 1;
  NoteModel.categoryId = selectedCategory;
  alert("NoteModel = "+NoteModel);
  return false;
}
function clearForm() {
  //  alert("clearForm: entrypoint");
  return false;
}

</script>

<style lang="css">
.button {
  float: right;
}
</style>
