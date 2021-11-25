import Note from "@/types/NoteType";
import axios from "axios";

const baseUR = "http://localhost:8080"

export class NoteRepository {

  noteRecord: Note = {
    id: 0,
    title: "",
    desc: "",
    dateRecorded: "",
    dateModified: "",
    personId: 0
  };

  constructor () {

  }
  getAll(): Note {
    axios
      .get(baseUR + "/notes")
      .then(response => (
        this.mapData(response.data)
      ))
      .catch(error => console.log(error))
    return this.noteRecord;
  }

  get(id: number):Note {
    axios
      .get(baseUR + `/note/${id}`)
      .then(response => (
        this.mapData(response.data)
      ))
      .catch(error => console.log(error))
    return this.noteRecord;
  }

  create(data: Response):Note {
    axios.post("/note", data)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.noteRecord;
  }

  update(id: number, data: Response):Note {
    axios.put(`/note/${id}`, data)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.noteRecord;
  }

  delete(id: number):void {
    axios.delete(`/note/${id}`);
  }

  deleteAll():void {
    axios.delete(`/notes`);
  }

  findByCode(code: string):Note{
    axios.get(`/note?code=${code}`)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.noteRecord;
  }

  mapData(data: Note): Note {
    this.noteRecord.title = data.title;
    this.noteRecord.desc = data.desc;
    this.noteRecord.dateModified = data.dateModified;
    this.noteRecord.dateRecorded = data.dateRecorded;
    this.noteRecord.id = data.id;
    this.noteRecord.personId = data.personId;
    return this.noteRecord;
  }
}
