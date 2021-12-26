import axios from 'axios'
import PersonType from "../types/PersonType";

const apiClient = axios.create({
  baseURL: "http://10.170.1.105:3000",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllPeople() {
    return apiClient.get('/people')
  },
  getPerson(id: number) {
    return apiClient.get('/people/' + id)
  },
  postPerson(person: PersonType) {
    return apiClient.post('/people', person)
  }
}


