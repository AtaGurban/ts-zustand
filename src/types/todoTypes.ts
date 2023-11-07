export interface CreateTodoCredentials {
  title: string;
  content: string;
  imgCount: number;
  [key: string]: string | Date | number;
}
export interface CreateTodoImgCredentials {
  todoId: string;
  img: File;
  [key: string]: string | Date | number | File;
}
export interface UpdateTodoImgCredentials {
  todoId: string;
  id: number;
  img: File;
  [key: string]: string | Date | number | File;
}
export interface UpdateTodoCredentials {
  title: string;
  content: string;
  id: number;
  [key: string]: string | Date | number;
}
export interface DeleteTodoCredentials {
  id: number;
  [key: string]: string | Date | number;
}
interface TodoIncludeUser {
  name: string;
  email: string;
}
export interface TodoPaginationResponse {
  count: number;
  rows: TodoItem[]
}
type TodoItem = {
  _id: number;
  title:string;
  content: string;
  user: TodoIncludeUser | number;
  images: ImageItem[];
};
type GetTodoById = {
  id: string;
  [key: string]: string;
};
type TodoItemById = {
  _id: number;
  title:string;
  content: string;
  user: string;
  images: ImageItem[];
};
export type ImageItem = {
  img: string;
  _id: string;
};

export type GetTodoBySearch = {
  search: string;
  [key: string]: string;
};

export type GetTodoItem = GetTodoById | GetTodoBySearch;

type ResponseForId = TodoItemById;
type ResponseForSearch = TodoPaginationResponse;

export type GetTodoResponse = ResponseForId | ResponseForSearch;