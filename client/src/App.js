import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
