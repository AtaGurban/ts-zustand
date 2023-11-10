import { TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { useLocation } from "react-router";
import MyDatePicker from "../../components/DatePicker";
import { registration } from "../../http/userApi";
import styles from "./Registration.module.css";
import {RegistrationCredentials} from "../../types/userTypes"
import moment from "moment";
interface FormState {
  email: string;
  phone: string;
  name: string;
  password: string;
  birthdate: Date | null;
}

const initFormState = {
  email: "",
  phone: "",
  name: "",
  password: "",
  birthdate: null,
}
const Login:FC = () => {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState<FormState>(initFormState)
  const handlerForm = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  const handleRegister = async () => {
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        const element = formData[key];
        if (element === "" || element === null) return alert("dad")
      }
    }
    try {
      await registration(formData)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.login_wrapper}`}>
      <div className={styles.container}>
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
              <MyDatePicker value={formData.birthdate} onChange={date => setFormData(prev => ({...prev, birthdate: date}))}/>
            </div>
            <button className={`${styles.btn}`} type="button" onClick={handleRegister}>
              Hasaba durmak
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default Login;
