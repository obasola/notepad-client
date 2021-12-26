import axios from 'axios'
import NoteType from "../types/NoteType";

const apiClient = axios.create({
  baseURL: "http://10.170.1.105:3000",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllNotes() {
    return apiClient.get('/notes')
  },
  getNote(id: number) {
    return apiClient.get('/notes/' + id)
  },
  postNote(note: NoteType) {
    return apiClient.post('/notes', note)
  }
}


