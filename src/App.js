import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Skills from "./components/Skills";
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";
import 'boxicons';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact>
            <Home />
        </Route>
        <Route path="/about" component={About} exact>
            <About />
        </Route>
        <Route path="/shop" component={Shop} exact>
            <Shop />
        </Route>
        <Route path="/skills" component={Skills} exact>
            <Skills />
        </Route>
        <Route path="/account" component={Account} exact>
            <Account />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
