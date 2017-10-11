/**
 * File    : google_map.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 11/10/2017
 */
import React, {Component} from 'react';

class GoogleMap extends Component {

  // because google maps does not know what render in react does, we load it here
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;