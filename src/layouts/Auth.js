import React from "react";
import {Routes,Route,useLocation} from "react-router-dom";
import rroutes from "../routes.js";

import "../assets/css/sb-admin-2.min.css";

const Auth = (props) => {  
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (rroutes) => {
      return rroutes.map((prop, key) => {
        if (prop.layout === "AuthLayout") {
          return (
            <Route
              path={prop.path}
              element={<prop.component></prop.component>}
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
        <div className="App" id="wrapper">
          <Routes>
              {getRoutes(rroutes)}
          </Routes>
          </div>
       </div>
      </>
    );
  };

  export default Auth;