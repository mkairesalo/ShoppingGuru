import React, { Component } from "react";
import "./Komponentit/tyyli.css";
import NavMenu from "./Komponentit/NavMenu";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TuoteList from "./Komponentit/TuoteList";
import KoriList from "./Komponentit/KoriList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavMenu />
          </header>

          <Switch>
            <Route exact path="/" component={TuoteList} />
            <Route exact path="/ostoslista" component={TuoteList} />
            <Route exact path="/kori" component={KoriList} />
          </Switch>
<footer>
  <p>&nbsp;</p>
</footer>
        </div>
      </Router>
    );
  }
}

export default App;
