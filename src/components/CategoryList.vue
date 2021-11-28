<template>
  <div class="list row">
      <div class="col-md-6">
        <h4>Category List</h4>
        <table class="table table-dark table=striped">
          <thead>
            <tr>
              <th class="label-hdrtext" scope="col">Id</th>
              <th class="label-hdrtext" scope="col">Code</th>
              <th class="label-hdrtext" scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td class="label-text">{{ category.id }}</td>
              <td class="label-text">{{ category.code }}</td>
              <td class="label-text">{{ category.description }}</td>
            </tr>
          </tbody>
        </table>

        <button class="m-3 btn btn-sm btn-success" @click="findAllCategories">
          Refresh
        </button>
        <button class="m-3 btn btn-sm btn-info" @click="addNewCategoryCode">
          New Category
        </button>
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
          Remove All
        </button>
      </div>
    </div>
</template>

<script lang="ts">
import CategoryRepository from "@/service/CategoryRepository";
import Category from "../types/CategoryType";
import CategoryModel from "../models/CategoryModel";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryList",
  components: {},
  data() {
    return {
      categories: [],
      category: this.newCatagory(),
      submitted: false,
    };
  },

  methods: {
    newCatagory() {
      let category = {
        id: 0,
        code: "",
        name: "",
        dateModified: new Date(),
        dateRecorded: new Date(),
      };
      this.submitted = false;
      return category;
    },
    openCategoryForm() {
      alert("Btn clicked");
    },

    saveCategoryData() {
      CategoryRepository.create(this.category);
    },

    loadSelectedCategory(selectedCat: CategoryModel) {
      this.category = selectedCat;
    },
    addNewCategoryCode() {
      // an alternative way
      this.$router.push("/addCategory");
    },
    findAllCategories() {
      CategoryRepository.getAll()
        .then((response) => {
          this.categories = response.data;
          console.log(response.data);
          //return this.categories;
        })
        .catch((e) => {
          console.log(e);
        });
    },
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

.cat-table {
  margin-left: 15px;
}
.label-text {
  color: #a9d387;
}
.label-hdrtext {
  color: #a7dd8f;
  font-weight: bolder;
}
.left-align {
  float: left;
}
</style>
