import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Nav />
            <Switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/saved" component={Saved} />
              {/* <Route exact path="/books/:id" component={Detail} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
