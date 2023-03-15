// import React from 'react';
// import {
//   BrowserRouter, Routes, Route, Link
// } from "react-router-dom";


// export default function Routers() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/detail/:id" element={<Detail />} />


//          <Route path="/login" element={<Login/>} />
//      {/* <Route path="/register" element={<Register />} />
//       <Route path='*' element={<NotFound />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

import Dashboard from "./views/dashboard/Index.jsx";
import ProductAdd from "./views/products/Add.jsx";
import UserRegister from "./views/users/Register.js";
import UserLogin from "./views/users/Login.jsx";
var routes = [
  {
    path: "/dashboard/index",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/products/add",
    name: "ProductAdd",
    component: ProductAdd,
    layout: "/admin"
  },
  {
    path: "/register",
    name: "AuthRegister",
    component: UserRegister,
    layout: "AuthLayout"
  },
  {
    path: "/login",
    name: "AuthLogin",
    component: UserLogin,
    layout: "AuthLayout"
  },
];
export default routes;
