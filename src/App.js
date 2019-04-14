import React, { Component } from 'react';
import SubscribeOurChannel from './SubscribeOurChannel/SubscribeOurChannel';
import './SubscribeOurChannel/subscribe-our-channel.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SubscribeOurChannel />
        </header>
      </div>
    );
  }
}

export default App;
