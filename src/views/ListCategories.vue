<template>
  <div>
    <h2>List Categories</h2>
    <button @click="openCategoryForm()" class="btn-primary">New Category</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from '@/types/Job'
import OrderTerm from '@/types/OrderTerm'
import JobList from './components/JobList.vue'
import router from '../router';

export default defineComponent({
  name: 'ListCategories',
  components: { JobList },
  setup() {
    const notes = ref<Note[]>([
      { title: 'How 2 Fix IntelliJ Debugger', location: 'lon lon ranch', salary: 30000, id: '1' },
      { title: 'How 2 run AIF Load', location: 'death mountain', salary: 40000, id: '2' },
      { title: 'How 2 run EOD job', location: 'the lost woods', salary: 35000, id: '3' },
      { title: 'How 2 suppress emails for batch processing', location: 'lake hylia', salary: 21000, id: '4' },
      { title: 'How 2 do full build of FraudAML project', location: 'gerudo valley', salary: 32000, id: '5' }
    ])
    const order = ref<OrderTerm>('title')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, order, handleClick }
  }
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
