import React, { FC } from 'react'
import { userStore } from '../store/userStore'
import { Navigate, Route, Routes } from "react-router";

const AppRouter:FC = () => {
  const {isAuth} = userStore()
  return (
    <Routes>
      {
        isAuth ?
      }
    </Routes>
  )
}

export default AppRouter