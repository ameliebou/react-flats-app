import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Map from './map.jsx';
import flats from '../../data/flats.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    }
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    return(
      <div className="window">
        <div className="left-scene">
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} />
        </div>
        <div className="right-scene">
          <Map flat={this.state.selectedFlat} />
        </div>
      </div>
    )
  };
};

export default App;
