import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index)
  }

  render() {
      return(
        <div className={`flat ${this.props.selected? "selected" : ""}`} style={{backgroundImage: `url(${this.props.image})`}} onClick={this.handleClick}>
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
