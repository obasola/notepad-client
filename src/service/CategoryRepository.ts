import http from "../http-commons";
import Category from "../types/CategoryType";



class CategoryRepository {

  getAll(): Promise<any> {
    return http.get("/categories");
  }

  get(id: any): Promise<any> {
    return http.get(`/category/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/category", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/category/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/category/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/categories`);
  }

  findByCode(code: string): Promise<any> {
    return http.get(`/category?code=${code}`);
  }

  categoryRecord: Category = {
    code: "",
    name: "",
    dateModified: new Date,
    dateRecorded: new Date,
    id: 0
  };
    mapData(data: Category): Category {
      this.categoryRecord.code = data.code;
      this.categoryRecord.name = data.name;
      this.categoryRecord.dateModified = data.dateModified;
      this.categoryRecord.dateRecorded = data.dateRecorded;
      this.categoryRecord.id = data.id;
      return this.categoryRecord;
    }
}

export default new CategoryRepository();




