import React from 'react';
import map from '../images/exampleMap.jpg';
import direction from '../images/exampleDirection.jpg';
import '../stylesheet/map.css';
import '../stylesheet/buttons.css';

class Map extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="establishments">
        <section className="sectionList">
        </section>
        <section className="sectionDetails">
          <img className="exampleMap" src={map} alt="exampleMap" />
          <img className="exampleDirection" src={direction} alt="exampleDirection" />
          <div className="divBtb"><button className="btnReport"><i class="fas fa-clipboard-list"></i>Reportar</button></div>
        </section>
      </div>
      </React.Fragment>
    );
  }
}

export default Map;