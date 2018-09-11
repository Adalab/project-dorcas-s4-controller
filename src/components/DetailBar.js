import React from 'react'
import direction from '../images/exampleDirection.jpg';
import '../stylesheet/map.css';
import '../stylesheet/buttons.css';
//import GoogleMapsContainer from './GoogleMapsContainer';

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="establishments">
          {/* <GoogleMapsContainer /> */}
          <section className="sectionDetails">
          
            
            <div className="divBtb"><button className="btnReport"><i className="fas fa-clipboard-list"></i>Reportar</button></div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;