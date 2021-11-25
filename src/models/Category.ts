import CategoryType from "@/types/CategoryType";
import BaseModel from "./BaseModel";

export class Category extends BaseModel implements CategoryType {

  id = 0;
  personId = 0;
  categoryId = 0;
  code = "";
  name = "";

  constructor(id: number, code: string, name: string, personId: number, categoryId: number) {
    super();
    this.name = name;
    this.id = id;
    this.code= code;
    this.categoryId = categoryId;
    this.personId = personId;
  }

}
export default Category;