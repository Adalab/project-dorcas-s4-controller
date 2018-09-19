import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import '../stylesheet/map.css';
import keyMaps from '../data/maps.json';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const {latitude, longitude, name, address, postalcode, city}=this.props.establishmentFilter;
    const style = {
      height: '255px',
      border:'1px solid #67cf9b',
      letf:'1000px',
      'marginLeft': 'auto'
    }
    
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 13 }
        initialCenter = {{ lat: 40.42273000, lng: -3.71305930}}
      >
      
        <Marker 
  
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: latitude, lng: longitude} }
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
        
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
            {name} <br /> {address} <br />
            {postalcode} {city}
         
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    api: (keyMaps)
})(GoogleMapsContainer)

