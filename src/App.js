import React, { Component } from 'react';
import Title from './Title'
import IPinfo from './IPinfo'
import Info from './Info'
import NetData from './NetData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title titleText="Dashboard" />

        <Info name="Public IPv4 Address">
          <IPinfo url='https://api.ipify.org?format=json' />
        </Info>

        <Info name="Public IPv6 Address">
          <IPinfo url='https://api64.ipify.org?format=json' />
        </Info>

        <Info name="Server Latency">
          <NetData />
        </Info>
      </div>
    );
  }
}

export default App;
