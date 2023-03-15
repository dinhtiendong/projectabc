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
var routes = [
  {
    path: "/dashboard/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/products/add",
    name: "A",
    icon: "ni ni-planet text-blue",
    component: ProductAdd,
    layout: "/admin"
  },
  {
    path: "/users/add",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: UserRegister,
    layout: "/auth"
  },
];
export default routes;
