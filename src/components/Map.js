import React from 'react';
import map from '../images/exampleMap.jpg';
import direction from '../images/exampleDirection.jpg';

class Map extends React.Component {
  render() {
    return (
        <div className="establishments">
          <section className="sectionList">
          </section>
          <section className="sectionDetails">
            <img className="exampleMap" src={map} alt="exampleMap" />
            <img className="exampleDirection" src={direction} alt="exampleDirection" />
          </section>
        </div>
    );
  }
}

export default Map;