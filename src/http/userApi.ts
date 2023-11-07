import { $authhost, $host } from ".";
import {jwtDecode as jwt_decode} from 'jwt-decode';
import { LoginCredentials, RegistrationAndLoginResponse, RegistrationCredentials, TokenResponse } from "../types/userTypes";
import { objectToFormData } from "../utils/func";


export const registration = async (item:RegistrationCredentials): Promise<TokenResponse>=>{
  const formData = objectToFormData(item)
  const {data} = await $host.post<RegistrationAndLoginResponse>('api/user/registration', formData)
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}


export const login = async (item:LoginCredentials): Promise<TokenResponse>=>{
  const formData = objectToFormData(item)
  const {data} = await $host.post('api/user/login', formData)
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async (): Promise<TokenResponse>=>{
  const {data} = await $authhost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}