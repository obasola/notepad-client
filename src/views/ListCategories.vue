<template>
  <div>
    <h2>List Categories</h2>
    <router-link to="/addCategory">New Category</router-link>
  </div>
</template>

<script lang="ts">
import CategoryRepository  from "@/service/CategoryRepository";
import Category from "@/types/CategoryType";
import { defineComponent, onMounted, ref } from "vue";


export default defineComponent({
  name: "ListCategories",
  components: {},
  data() {

    return {
      category: {
        id: 0,
        code: "",
        name: "",
        dateModified: new Date,
        dateRecorded: new Date,
      },
      submitted: false,
    };
  },
  computed: {
    findAllCategories() {
      return CategoryRepository.getAll();
    }
  },
  methods: {
    openCategoryForm() {
      alert("Btn clicked");
    },

    saveCategoryData() {
      CategoryRepository.create(this.category);
    },

    loadSelectedCategory(selectedCat:Category) {
      this.category = selectedCat;
    }

  },
});
</script>

<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
