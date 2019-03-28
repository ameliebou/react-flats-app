import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return(
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.flats.map (flat => {
            <AnyReactComponent
              lat={flat.lat}
              lng={flat.lng}
              text={flat.name}
            />
          })}
        </GoogleMapReact>
      </div>
    )
  };
}

export default Map;
