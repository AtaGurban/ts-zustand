import { $authhost, $host } from ".";
import {jwtDecode as jwt_decode} from 'jwt-decode';
interface LoginCredentials {
  login: string;
  password: string;
}
interface TokenResponse {
  token: string;
}

interface RegistrationAndLoginResponse {
  token: string;
  // Другие свойства, если они присутствуют в ответе сервера
}

export const registration = async (email:string, name:string, password:string, phone:string, forCRM:string): Promise<TokenResponse>=>{
  const {data} = await $host.post<RegistrationAndLoginResponse>('api/user/registration', {email, password, name, phone, forCRM})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}


export const login = async (item:LoginCredentials): Promise<TokenResponse>=>{
  const {data} = await $host.post('api/user/login', item)
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async ()=>{
  const {data} = await $authhost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}