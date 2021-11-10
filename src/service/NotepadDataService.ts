import http from "../http-commons";

class NotepadDataService {
  getAll() {
    return http.get("/categories");
  }

  get(id: number) {
    return http.get(`/category/${id}`);
  }

  create(data: Response) {
    return http.post("/category", data);
  }

  update(id: number, data: Response) {
    return http.put(`/category/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/category/${id}`);
  }

  deleteAll() {
    return http.delete(`/categories`);
  }

  findByCode(code: string) {
    return http.get(`/category?code=${code}`);
  }
}

export default new NotepadDataService();