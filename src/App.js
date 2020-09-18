import React, { Component } from 'react';

import Nav from './Nav';
import Body from './Body';
import Calculator from './Calculator';
import Location from './Location';
import Delivery from './Delivery'



class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Body/>
        <Calculator/>
        <Location/>
        <Delivery/>

      </div>
    );
  }
}

export default App;
