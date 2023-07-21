import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter basename="/ui/">

  <Routes>
    <Route path="/" element={<App/>}/>
  </Routes>

  
</BrowserRouter>

);


reportWebVitals();
