import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/books";
import Saved from "./pages/saved";
import NoMatch from "./pages/noMatch";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron"
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Nav />
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
