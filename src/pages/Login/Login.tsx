import { TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import MyDatePicker from "../../components/DatePicker";
import { login, registration } from "../../http/userApi";
import { userStore } from "../../store/userStore";
import {
  LoginCredentials,
  RegistrationCredentials,
} from "../../types/userTypes";
import { LOGIN_PAGE, REGISTRATION_PAGE } from "../../utils/pathConsts";
import styles from "./Registration.module.css";

const initFormState = {
  email: "",
  phone: "",
  name: "",
  password: "",
  birthdate: null,
};

const initLoginFormState = {
  password: "",
  login: "",
};
const Login: FC = () => {
  const { pathname } = useLocation();
  const { setIsAuth, setUser } = userStore();
  const [formData, setFormData] =
    useState<RegistrationCredentials>(initFormState);
  const [loginFormData, setLoginFormData] =
    useState<LoginCredentials>(initLoginFormState);
  const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handlerLoginForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const setBirthdateHandler = (date: Date | null) => {
    if (date !== null) {
      setFormData((prev) => ({ ...prev, birthdate: date }));
    }
  };

  const handleRegister = async () => {
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const element = formData[key];
        if (element === "" || element === null) return alert("dad");
      }
    }
    try {
      await registration(formData).then((data) => {
        setUser(data);
        setIsAuth(true);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async () => {
    for (const key in loginFormData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const element = loginFormData[key];
        if (element === "" || element === null) return alert("dad");
      }
    }
    try {
        await login(loginFormData).then((data) => {
          setUser(data);
          setIsAuth(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`d-flex align-items-center justify-content-center ${styles.login_wrapper}`}
    >
      <div className={styles.container}>
        {pathname === LOGIN_PAGE ? (
          <>
            <h2 className="mb-3">Hasaba girmek</h2>
            <form className={styles.form}>
              <TextField
                type="text"
                label="Telefon ýa-da email:"
                name="login"
                color="secondary"
                variant="outlined"
                className="mb-3 bg-white"
                value={loginFormData.login}
                onChange={handlerLoginForm}
              />
              <TextField
                type="password"
                label="Parol:"
                name="password"
                color="secondary"
                variant="outlined"
                className="mb-3"
                value={loginFormData.password}
                onChange={handlerLoginForm}
              />
              <div className="text-end">
                <Link to={REGISTRATION_PAGE}>
                  <span className="text-muted">Agza boljak</span>
                </Link>
              </div>
              <button
                className={`${styles.btn}`}
                type="button"
                onClick={handleLogin}
              >
                Hasaba girmek
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="mb-3">Registrasiýa</h2>
            <form className={styles.form}>
              <TextField
                type="text"
                label="Adyňyz:"
                name="name"
                color="secondary"
                variant="outlined"
                className="mb-3 bg-white"
                value={formData.name}
                onChange={handlerForm}
              />
              <TextField
                type="email"
                label="Email:"
                name="email"
                color="secondary"
                variant="outlined"
                className="mb-3"
                value={formData.email}
                onChange={handlerForm}
              />
              <TextField
                type="phone"
                label="Telefon:"
                name="phone"
                color="secondary"
                variant="outlined"
                className="mb-3"
                value={formData.phone}
                onChange={handlerForm}
              />
              <TextField
                type="password"
                label="Parol:"
                name="password"
                color="secondary"
                variant="outlined"
                className="mb-3"
                value={formData.password}
                onChange={handlerForm}
              />
              <div className="w-100">
                <MyDatePicker
                  value={formData.birthdate}
                  onChange={setBirthdateHandler}
                />
              </div>
              <button
                className={`${styles.btn}`}
                type="button"
                onClick={handleRegister}
              >
                Hasaba durmak
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
