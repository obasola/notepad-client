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
        <select class="form-select" v-model="selectedCategory" @change="setCategory($event)">
          <option v-for="option in options" :key=option.code :value="option.code">{{option.desc}}</option>
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
        <label class="my-form-label" for="desc">Description</label>
        <input
          class="form-control"
          id="desc"
          type="text"
          placeholder="your name"
          v-model="noteModel.desc"
        />
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
import NoteModel from '../models/NoteModel';
import NoteModule from "@/store/modules/note";

 const props = defineProps({
    subtitle: String
  })
  
   const selectedCategory = ref('');
   const noteModel = NoteModel;
    const options = [
      {
        code: "ZZ",
        desc: "Choose"
      },
      {
        code: "H2",
        desc: "How To"
      },
      {
        code: "OB",
        desc: "On-Boarding"
      },
      {
        code: "SS",
        desc: "Sql Scripts"
      },
      {
        code: "MS",
        desc: "Misc"
      },
      {
        code: "TO",
        desc: "Todo"
      }
    ]
 
 
    function setCategory(event:Event) {
     // selectedCategory.value = event.target.value;
     //alert("selectedCategory =  "+ selectedCategory.value);
    }

    function canShowTitle() {
      let rc = true;

      if(selectedCategory.value === 'TO') {
        rc = false;
      }
      //alert("return value = "+ rc);
      return rc;
    }

    function addNote() {
     // alert("AddNote: entrypoint");
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
