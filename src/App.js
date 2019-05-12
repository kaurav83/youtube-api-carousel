import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SomeContent from './SomeContent';
import Catalog from './catalog/Catalog';
import Card from './catalog/Card';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SomeContent /> */}
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/some-content" component={SomeContent} />
              <Route path="/catalog" component={Catalog} />
              <Route path="/card/:_id" component={Card} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
