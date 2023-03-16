import React from "react";
import {Routes,Route,useLocation} from "react-router-dom";
// reactstrap components
import "../assets/css/sb-admin-2.min.css";
import routes from "../routes/modules.jsx";
console.log(routes);
const Admin = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();
    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }, [location]);
    const getRoutes = (routes) => {
      
      return routes.map((prop, key) => {
        if (prop.layout === "AdminModule") {
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
              {getRoutes(routes)}
            </Routes>
          </div>  
        </div>
      </>
    );
  };
  
  export default Admin;