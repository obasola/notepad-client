<template>
  <div class="boxLayout">
    <h3>{{ subtitle }}</h3>
    
    <form novalidate class="formlayout">
      <div class="mb-3">
        <label class="my-form-label" 
          style="float:left; margin-left: 0.5em" 
          for="title">Title</label>
        <input
          class="form-control"
          id="title"
          v-model="note.title"
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
          v-model="note.desc"
        />
      </div>
  
      <br />
      <div class="mb-3">
        <button
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Save
        </button>
          &nbsp;
        <button
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

<script>
import { ref } from "vue";

export default {
  name: "NoteForm",
  props: {
    subtitle: String,
  },
  setup() {
    const note = ref({
      title: '',
      desc : '',
    });

    return {
      note
    }
  },
};
</script>

<style lang="css">
.button {
  float: right;
}
</style>
