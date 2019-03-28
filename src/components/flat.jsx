import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return(
      <div className="flat">
        <div className="price-tag">
          {this.props.price}
        </div>
        <div className="flat-title">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    )
  };
}

export default Flat;
