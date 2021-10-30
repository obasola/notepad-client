export type Category = {
  id: number;
  code: string;
  description: string;
  createdOn: string;
  modifiedOn: string;
  notes: [{
    id: string;
    title: string;
    note: string;
    editing: boolean;
    category: string;
    dateCreated: string;
  }]
};
export type NoteItem = {
  id: number;
  title: string;
  description: string;
  editing: boolean;
  createdBy: string;
  createdOn: string;
  modifiedOn: string;
  category: string;
};
export type Person = {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordEncrypted: boolean;
  editing: boolean;
  active: boolean;
  gender: string;
  createdBy: string;
  createdOn: string;
  modifiedOn: string;
  notes: [{
    id: string;
    title: string;
    note: string;
    category: string;
    dateCreated: string;
  }]
  todo:  [{
    id: string;
    title: string;
    editing: boolean;
    description:string;
    dateCreated: string;
  }]
};
export type State = {
  loading: boolean;
  notes: NoteItem[];
  people: Person[];
  categories: Category[];
  showCreateModal: boolean;
  showEditModal: boolean;

  showCategoryModal: boolean;
  editModalCategoryId: number | undefined;
  showCategoryId: number | undefined;

  showNoteModal: boolean;
  editModalNoteId: number | undefined;
  showNoteId: number | undefined;

  showPersonModal: boolean;
  editModalPersonId: number | undefined;
  showPersonId: number | undefined;
};
export const state: State = {
  loading: false,  
  showCreateModal: false,
  showEditModal: false,

  showCategoryModal: false,
  editModalCategoryId: undefined,
  showCategoryId: undefined,

  showNoteModal: false,
  editModalNoteId: undefined,
  showNoteId: undefined,

  showPersonModal: false,
  editModalPersonId: undefined,
  showPersonId: undefined,

  notes: [],
  people: [],
  categories: [],
};