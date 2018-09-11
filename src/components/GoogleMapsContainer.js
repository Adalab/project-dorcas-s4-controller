import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import '../stylesheet/map.css';
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
    const style = {
      width: '40vw',
      height: '35vh',
      border:'1px solid #67cf9b',
      top:'100px',
      letf:'1000px',
      'marginLeft': 'auto',
      'marginRight': '20px'
    }
    
    return (
      <Map className="maps"
        item
        xs = { 12 }
         style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 40.42273000, lng: -3.71305930}}
      >
        <Marker 
  
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: 40.42273000, lng: -3.71305930 }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
        
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
            
         {/* {this.props.establisment.name} */}
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    api: (process.env.GOOGLE_API_KEY_GOES_HERE)
})(GoogleMapsContainer)