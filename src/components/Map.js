import React from 'react';
import map from '../images/exampleMap.jpg';
import direction from '../images/exampleDirection.jpg';

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="logout">
          <p className="logoutName">José L.   |</p>
          <div className="logoutIcon"><i className="fas fa-sign-out-alt"></i></div>
        </div>
        <div className="establishments">
          <section className="sectionList">
          </section>
          <section className="sectionDetails">
            <img className="exampleMap" src={map} alt="exampleMap" />
            <img className="exampleDirection" src={direction} alt="exampleDirection" />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;