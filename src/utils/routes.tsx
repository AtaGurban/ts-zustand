import React from "react";
import { LOGIN_PAGE, REGISTRATION_PAGE, TODO_PAGE } from "./pathConsts";
import Todo from "../pages/Todo/Todo"
import Login from "../pages/Login/Login";
interface RouteItem {
  path: string;
  Element: React.ReactElement
}

export const authRoutes:RouteItem[] = [
  {
    path: TODO_PAGE,
    Element: <Todo/>
  },
]

export const publicRoutes:RouteItem[] = [
  {
    path: LOGIN_PAGE,
    Element: <Login/>
  },
  {
    path: REGISTRATION_PAGE,
    Element: <Login/>
  },
]