import Dashboard from "../views/dashboard/Index.jsx";
import ProductAdd from "../views/products/Add.jsx";
var routes = [
  {
    path: "/dashboard/index",
    name: "Dashboard",
    component: Dashboard,
    layout: "AdminModule"
  },
  {
    path: "/products/add",
    name: "ProductAdd",
    component: ProductAdd,
    layout: "AdminModule"
  }
];
export default routes;
