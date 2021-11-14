import axios from "axios";
import Category from "../types/Category";

const baseUR = "http://localhost:3080"

export default class CategoryRepository {

  categoryRecord: Category = {
    code: "",
    name: "",
    dateRecorded: "",
    dateModified: "",
    id: 0
  };


  getAll(): Category {
    axios
      .get(baseUR + "/categories")
      .then(response => (
        this.mapData(response.data)
      ))
      .catch(error => console.log(error))
    return this.categoryRecord;
  }

  get(id: number):Category {
    axios
      .get(baseUR + `/category/${id}`)
      .then(response => (
        this.mapData(response.data)
      ))
      .catch(error => console.log(error))
    return this.categoryRecord;
  }

  create(data: Response):Category {
    axios.post("/category", data)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.categoryRecord;
  }

  update(id: number, data: Response):Category {
    axios.put(`/category/${id}`, data)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.categoryRecord;
  }

  delete(id: number):void {
    axios.delete(`/category/${id}`);
  }

  deleteAll():void {
    axios.delete(`/categories`);
  }

  findByCode(code: string):Category{
    axios.get(`/category?code=${code}`)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.categoryRecord;
  }

  mapData(data: Category): Category {
    this.categoryRecord.code = data.code;
    this.categoryRecord.name = data.name;
    this.categoryRecord.dateModified = data.dateModified;
    this.categoryRecord.dateRecorded = data.dateRecorded;
    this.categoryRecord.id = data.id;
    return this.categoryRecord;
  }
}
