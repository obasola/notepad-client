import CategoryType from "@/types/CategoryType";
import BaseModel from "./BaseModel";

class CategoryModel extends BaseModel implements CategoryType {

  id = 0;
  code = "";
  description = "";

  constructor(id: number, code: string, desc: string) {
    super();
    this.description = desc;
    this.id = id;
    this.code= code;

  }

}
export default CategoryModel;
