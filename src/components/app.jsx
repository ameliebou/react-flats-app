import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Map from './map.jsx';

class App extends Component {
  render() {
    return(
      <div className="window">
        <div className="left-scene">
          <FlatList />
        </div>
        <div className="right-scene">
          <Map />
        </div>
      </div>
    )
  };
};

export default App;
