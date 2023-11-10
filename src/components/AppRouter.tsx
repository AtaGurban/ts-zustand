import React, { FC } from "react";
import { userStore } from "../store/userStore";
import { Navigate, Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "../utils/routes";
import { LOGIN_PAGE, TODO_PAGE } from "../utils/pathConsts";

const AppRouter: FC = () => {
  const { isAuth } = userStore();
  return (
    <Routes>
      {isAuth
        ? authRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.Element} />
          ))
        : publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.Element} />
          ))}
      <Route
        path="/*"
        element={<Navigate to={isAuth ? TODO_PAGE : LOGIN_PAGE} />}
      />
    </Routes>
  );
};

export default AppRouter;
