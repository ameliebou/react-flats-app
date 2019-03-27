import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return(
      <div className="flat">
        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
      </div>
    )
  };
}

export default Flat;
