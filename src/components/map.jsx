import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx'

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.5,
      lng: 13.4
    },
    zoom: 12
  };

  render() {
    return(
      <div className="map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.flat.lat}
            lng={this.props.flat.lng}
          />
        </GoogleMapReact>
      </div>
    )
  };
}

export default Map;
