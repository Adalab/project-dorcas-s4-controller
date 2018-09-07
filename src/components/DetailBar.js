import React from 'react';
import map from '../images/exampleMap.jpg';
import direction from '../images/exampleDirection.jpg';
import '../stylesheet/map.css';
import '../stylesheet/buttons.css';

class Map extends React.Component {
  render() {
    if (this.props.establishments.data === undefined) {
      return null;
    } else {
      return (
        <React.Fragment>
          <div className="establishments">
            <section className="sectionDetails">
              <img className="exampleMap" src={map} alt="exampleMap" />
              {/* <img className="exampleDirection" src={direction} alt="exampleDirection" /> */}
                  <div className="establishments__div__details">
                <div className="details__img" style={{ backgroundImage: `url()` }}>
                  <img className="imgDetails" src="" alt="" />
                </div>
                <div className="details__data">
                  <h2 className="titleDatos"></h2>
                  <div>
                    <p className="parDatos">Dirección:</p>
                    <p className="data__directio"></p>
                    <p className="data__meters"></p>
                  </div>
                </div>
              </div>
            <div className="divBtb"><button className="btnReport"><i className="fas fa-clipboard-list"></i>Reportar</button></div>
            </section>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Map;