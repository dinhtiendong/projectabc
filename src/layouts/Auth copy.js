import React from "react";
import {BrowserRouter,Routes,Route,Link,utlet,useLocation} from "react-router-dom";
import { Container, Row} from "reactstrap";
import routes from "../Routes.js";
const Auth = (props) => {  
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }, [location]);
    
    const getRoutes = (routes) => {
      console.log("GJDLG");
      return routes.map((prop, key) => {
        if (prop.layout === "/auth") {
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
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Routes>
                {getRoutes(routes)}
              </Routes>
            </Row>
          </Container>
        </div>
      </>
    );
  };

  export default Auth;