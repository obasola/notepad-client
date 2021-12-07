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

      this.category.dateRecored = new Date;
      this.category.dateModified = null;
      
      CategoryRepository.create(category)
        .then(response => {
          this.category.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          alert("Success, category Id is: "+response.data.id);
        })
        .catch(e => {
          console.log(e);
          alert("Error: "+e);
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
