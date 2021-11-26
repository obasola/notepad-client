import CategoryType from "@/types/CategoryType";
import BaseModel from "./BaseModel";

export class CategoryModel extends BaseModel implements CategoryType {

  id = 0;
  code = "";
  name = "";

  constructor(id: number, code: string, name: string) {
    super();
    this.name = name;
    this.id = id;
    this.code= code;

  }

}
export default CategoryModel;