import { $authhost } from ".";
import { CreateTodoCredentials, CreateTodoImgCredentials, DeleteTodoCredentials, GetTodoBySearch, GetTodoItem, GetTodoResponse, TodoPaginationResponse, UpdateTodoCredentials, UpdateTodoImgCredentials } from "../types/todoTypes";
import { buildQueryParams, objectToFormData } from "../utils/func";


export const createTodo = async (item:CreateTodoCredentials): Promise<boolean>=>{
  const formData = objectToFormData(item)
  const {data} = await $authhost.post<boolean>('api/todo', formData)
  return data
}

export const updateTodo = async (item:UpdateTodoCredentials): Promise<boolean>=>{
  const formData = objectToFormData(item)
  const {data} = await $authhost.put<boolean>('api/todo', formData)
  return data
}

export const getTodo = async (item:GetTodoItem): Promise<GetTodoResponse>=>{
  const queryParams = buildQueryParams(item)
  const {data} = await $authhost.get<GetTodoResponse>(`api/todo?${queryParams}`)
  return data
}

export const deleteTodo = async (item:DeleteTodoCredentials): Promise<boolean>=>{
  const queryParams = buildQueryParams(item)
  const {data} = await $authhost.delete<boolean>(`api/todo?${queryParams}`)
  return data
}

export const deleteTodoImg = async (item:DeleteTodoCredentials): Promise<boolean>=>{
  const queryParams = buildQueryParams(item)
  const {data} = await $authhost.delete<boolean>(`api/todo/img?${queryParams}`)
  return data
}

export const getTodoByUser = async (item:GetTodoBySearch): Promise<TodoPaginationResponse>=>{
  const queryParams = buildQueryParams(item)
  const {data} = await $authhost.get<TodoPaginationResponse>(`api/todo?${queryParams}`)
  return data
}


export const createTodoImg = async (item:CreateTodoImgCredentials): Promise<boolean>=>{
  const formData = objectToFormData(item)
  const {data} = await $authhost.post<boolean>('api/todo/img', formData)
  return data
}

export const updateTodoImg = async (item:UpdateTodoImgCredentials): Promise<boolean>=>{
  const formData = objectToFormData(item)
  const {data} = await $authhost.put<boolean>('api/todo/img', formData)
  return data
}
