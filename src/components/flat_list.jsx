import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return(
      <div className="flat-list">
        <Flat name="Best flat ever" price="120€"/>
        <Flat name="Pretty apartment" price="140€"/>
      </div>
    );
  }
}

export default FlatList;
