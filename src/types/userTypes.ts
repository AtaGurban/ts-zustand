export interface LoginCredentials {
  login: string;
  password: string;
  [key: string]: string | Date;
}
export interface TokenResponse {
  id: string,
  email: string,
  birthdate: string,
  avatar: string,
  name: string,
  phone: string,
  password: string,
}

export interface RegistrationAndLoginResponse {
  token: string;
  // Другие свойства, если они присутствуют в ответе сервера
}

export interface RegistrationCredentials {
  email: string;
  name: string;
  password: string;
  phone: string;
  birthdate: Date | null;
  [key: string]: string | Date | null;
}
