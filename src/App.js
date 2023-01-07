import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Services from "./pages/Services/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/pricing" exact>
            <Pricing />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
