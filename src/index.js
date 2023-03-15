import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Link,utlet} from "react-router-dom";

import './index.css';

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact  element={<h1>JGLDSGD</h1>} />
      <Route path="/admin/*" element={(props) => <AdminLayout {...props} />} />
      <Route path="/auth/*" element={<AuthLayout/>}></Route>
    </Routes>
  </BrowserRouter>
);

// root.render(
//   <React.StrictMode>
//     <Login />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
