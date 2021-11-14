<template>
  <div>
    <h2>List Categories</h2>
    <router-link to="/addCategory">New Category</router-link>
  </div>
</template>

<script lang="ts">
import CategoryRepository  from "@/service/CategoryRepository";
import Category from "@/types/Category";
import { defineComponent, onMounted, ref } from "vue";

const dbRepository: CategoryRepository = new CategoryRepository();

export default defineComponent({
  name: "ListCategories",
  components: {},
  setup() {
    const categories: Category = dbRepository.getAll();
    let category: Category = {
      id: 0,
      code: "",
      name: "",
      dateRecorded: "",
      dateModified: "",
    };

    function openCategoryForm() {
      alert("Btn clicked");
    }

    function loadSelectedCategory(selectedCat: Category): void {
      category = selectedCat;
    }
    return { category, categories, openCategoryForm,loadSelectedCategory };
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
