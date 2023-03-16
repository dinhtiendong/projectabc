
import UserRegister from "../views/users/Register.js";
import UserLogin from "../views/users/Login.jsx";
var routes = [
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
