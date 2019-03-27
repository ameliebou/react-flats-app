import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import Map from './map.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [
        { id: 1, name: "Charming flat close to the Spree", price: "99€", image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fthespaces.com%2Fwp-content%2Fuploads%2F2017%2F01%2FBerlin-rental-Beautiful-sunny-loft-with-balconyUntitled-1.jpg&f=1" },
        { id: 2, name: "Romantic apartment for a lover's weekend", price: "120€", image: "https://backwoodshousewife.com/wp-content/uploads/2018/08/Buy-Flat-Berlin.jpg" },
        { id: 3, name: "Stylish loft", price: "150€", image: "https://pics.magicstay.com/photo-annonce-XJ/IO/M3/9A/bien_rentalsunited_110448_20181101001119_54.jpg" }
      ]
    }
  }

  render() {
    return(
      <div className="window">
        <div className="left-scene">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="right-scene">
          <Map />
        </div>
      </div>
    )
  };
};

export default App;
