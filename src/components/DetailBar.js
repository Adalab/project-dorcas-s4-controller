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
          {this.props.establishments.data
            .filter(detailEstablishment => {
              return (
                detailEstablishment.establishmentId === this.props.selectedEstablishment
              )
            })
            .map(function (item) {
              return (
                < div className="establishments" >
                  <section className="sectionDetails">
                    <img className="exampleMap" src={map} alt="exampleMap" />
                    {/* <img className="exampleDirection" src={direction} alt="exampleDirection" /> */}
                    <div className="establishments__div__details">
                      <div className="details__img" style={{ backgroundImage: `url()` }}>
                        <img className="imgDetails" src="http://via.placeholder.com/230x230" alt="" />
                      </div>
                      <div className="details__data">
                        <div className="data__text">
                          <h2 className="data__title">{item.name}</h2>
                          <div className="data__div__direction">
                            <p className="direction__icon"><i className="fas fa-map-marker-alt"></i></p>
                            <div className="direction__div">
                              <p className="data">Dirección</p>
                              <p className="data__direction">{item.address}, {item.postalcode} {item.province}</p>
                              <p className="data__meters">A 543m</p>
                            </div>
                          </div>
                          <p className="data__affiliates"><i className="fas fa-user-friends"></i>{item.affiliates}</p>
                        </div>
                      </div>
                    </div>
                    <div className="divBtb"><button className="btnReport"><i className="fas fa-clipboard-list"></i>Reportar</button></div>
                  </section>
                </div>
              )
            })
          }
        </React.Fragment >
      );
    }
  }
}

export default Map;