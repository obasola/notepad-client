<template>
  <div class="boxLayout">
    <h3>{{ subtitle }}</h3>
    
    <form novalidate class="formlayout">
      <div class="mb-3">
        <label class="my-form-label" style="float:left; margin-left: 0.5em" for="name">Code</label>
        <input
          class="form-control"
          id="code"
          v-model="category.code"
          type="text"
          placeholder="Short code"
        />
      </div>
      <div class="mb-3">
        <label class="my-form-label" for="desc">Name</label>
        <input
          class="form-control"
          id="name"
          type="text"
          placeholder="full name"
          v-model="category.name"
        />
      </div>
      <div class="mb-3">
        <label class="my-form-label" for="addrLine1">Last Modified</label>
        <input
          class="form-control"
          id="dateModified"
          type="text"
          placeholder="last changed"
          v-model="category.dateModified"
        />
      </div>
      
      <br />
      <div class="mb-3">
        <button @click="addCategory"
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Save
        </button>

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
import '@/assets/css/formLayout.css';
import CategoryRepository from '../service/CategoryRepository';

export default {
  name: "CategoryForm",
  setup() {

    const category = ref({
      code: "",
      name: "",
      dateRecored: "",
      dateModified: "",
      id: "",
    });

    function addCategory() {
      CategoryRepository.create(category)
        .then(response => {
          this.category.id = response.data.id;
          this.category.code = response.data.code;
          this.category.name = response.data.name;
          this.category.dateRecored = response.data.dateRecored;
          this.category.dateModified = response.data.dateModified;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
      });
    }

    return {
      category,
      addCategory,
    };
  },
};
</script>

<style lang="css">

</style>
