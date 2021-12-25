import Category from "../types/CategoryType";
import axios from 'axios'
import CategoryType from "../types/CategoryType";

const apiClient = axios.create({
  baseURL: "http://10.170.1.105:3000",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllCategories() {
    return apiClient.get('/categories')
  },
  getCategory(id: number) {
    return apiClient.get('/categories/' + id)
  },
  postCategory(category: CategoryType) {
    return apiClient.post('/categories', category)
  }
}


