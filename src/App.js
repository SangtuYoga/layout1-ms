import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutDashboard from "./components/layout/layout";
import Page1 from "./components/page/page1";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="App wrapper">
          <LayoutDashboard>
            <Switch>
              <Route exact path="/" component={() => "Hello"} />
              <Route exact path="/about" component={() => "Dashboard"} />
              <Route exact path="/Pages" component={() => "Pages"} />
              <Route exact path="/faq" component={() => "FAQ"} />
              <Route exact path="/contact" component={() => "Contact"} />
              <Route exact path="/page-1">
                <Page1 />
              </Route>
              <Route exact path="/page-2" component={() => "page-2"} />
              <Route exact path="/page-3" component={() => "page-3"} />
              <Route exact path="/page-4" component={() => "page-4"} />
            </Switch>
          </LayoutDashboard>
        </div>
      </Router>
    </>
  );
};

export default App;
