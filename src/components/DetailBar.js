import React from 'react';
import map from '../images/exampleMap.jpg';
import '../stylesheet/map.css';
import '../stylesheet/buttons.css';
import '../stylesheet/detailBar.css';

class Map extends React.Component {
  render() {
    if (this.props.establishments.data === undefined) {
      return null;
    } else {
      return (
        <React.Fragment>
          <div className="establishments" >
            <section className="sectionDetails">
              <img className="exampleMap" src={map} alt="exampleMap" />
              {/* <img className="exampleDirection" src={direction} alt="exampleDirection" /> */}
              <div className="establishments__div__details">
                <div className="details__img" style={{ backgroundImage: `url()` }}>
                  <img className="imgDetails" src="http://via.placeholder.com/230x230" alt="" />
                </div>
                <div className="details__data">
                  <h2 className="data__title">{this.props.establishments.data[0].name}</h2>
                  <div>
                    <p className="data__icon"><i class="fas fa-map-marker-alt"></i></p>
                    <div>
                      <p className="data">Dirección</p>
                      <p className="data__direction">{this.props.establishments.data[0].address}{this.props.establishments.data[0].postalcode}{this.props.establishments.data[0].province}</p>
                      <p className="data__meters">A 543m</p>
                    </div>
                  </div>
                  <p className="data__affiliates">{this.props.establishments.data[0].affiliates}</p>
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