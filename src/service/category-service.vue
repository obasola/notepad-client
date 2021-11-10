// App.vue
import { inject } from 'vue'

export default {
  name: 'CategoryService',

  setup() {
    const axios: any = inject('axios')  // inject axios
    const api = 'http://localhost:8080'
    const getList = (): void => {
      axios
        .get(api + '/categories')
        .then((response: { data: any }) => {
          console.log(response.data)
        });
    };

    function getCatagories() {
      
    }
    return { getList, getCategories }
  }
}