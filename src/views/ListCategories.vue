<template>
  <div>
    <h2>List Categories</h2>
    <router-link to="/addCategory">New Category</router-link>
  </div>
</template>

<script lang="ts">

import Note from '@/types/Note';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ListCategories',
  components: {  },
  setup() {
    
    function openCategoryForm() {
      alert("Btn clicked");
    }
    
    const notes:Note[] = ([
      { title: 'How 2 Fix IntelliJ Debugger', desc: 'Will fill in later when back a', dateRecorded: '2021-09-04', dateModified: '2021-09-05', personId: 1, id: 1 },
      { title: 'How 2 run AIF Load', desc: '',dateRecorded: '2021-09-21', dateModified: '2021-09-27', personId: 1, id: 2 },
      { title: 'How 2 run EOD job', desc: '',dateRecorded: '2021-09-22', dateModified: '2021-09-25', personId: 1, id: 3 },
      { title: 'How 2 suppress emails for batch processing', desc: '',dateRecorded: '2021-09-30', personId: 1, dateModified: '2021-10-15', id: 4 },
      { title: 'How 2 do full build of FraudAML project', desc: '',dateRecorded: '2021-10-05', personId: 1, dateModified: '2021-10-25', id: 5 }
    ])
    
    return { notes, openCategoryForm }
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
