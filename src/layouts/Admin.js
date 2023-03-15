import React from "react";
import { BrowserRouter as  Routes, Route } from "react-router-dom";
// reactstrap components


import routes from "../routes.js";

const Admin = (props) => {
    const mainContent = React.useRef(null);
    
    const getRoutes = (routes) => {
      return routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
    };
  
    return (
      <>
        <div className="main-content" ref={mainContent}>
          <Routes>
            {getRoutes(routes)}
          </Routes>
        </div>
      </>
    );
  };
  
  export default Admin;