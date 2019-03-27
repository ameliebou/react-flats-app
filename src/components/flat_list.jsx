import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return(
      <div className="flat-list">
        {this.props.flats.map(flat => {
          return(
            <Flat name={flat.name} price={flat.price} image={flat.image} key={flat.id}/>
          )
        })}
      </div>
    );
  }
}

export default FlatList;
