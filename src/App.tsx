import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import "./App.css"
const CounterComponent: React.FC = () => {
 
  return (
    <BrowserRouter>
      <AppRouter/> 
    </BrowserRouter>
  );
};

export default CounterComponent;