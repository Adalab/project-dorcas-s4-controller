import React from "react";
import "../stylesheet/map.css";
import "../stylesheet/buttons.css";
import "../stylesheet/detailBar.css";
import ButtonReport from './ButtonReport';
import GoogleMapsContainer from "./GoogleMapsContainer";
import Logout from "./Logout";

class Map extends React.Component {
  render() {
    if (this.props.establishments.data === undefined) {
      return null;
    } else {
      return (
        <React.Fragment>
          <div className="establishments">
          <Logout logout={this.props.logout} email={this.props.email} />
          {this.props.establishments.data
            .filter(detailEstablishment => {
              return (
                detailEstablishment.establishmentId ===
                this.props.selectedEstablishment
              );
            })
            .map(function(item) {
              return (
                  <section className="sectionDetails">
                    <div className="container__maps">
                      <GoogleMapsContainer establishments={item} />
                    </div>
                    <div className="establishments__div__details">
                      <div className="details__img">
                        <div
                          className="imgDetails"
                          style={{
                            backgroundImage: `url(https://ada-controller.deploy-cd.com/${
                              item.imageWebUri
                            })`
                          }}
                        />
                      </div>
                      <div className="details__data">
                          <h2 className="data__title">{item.name}</h2>
                          <div className="data__div__direction">
                            <p className="direction__icon">
                              <i className="fas fa-map-marker-alt" />
                            </p>
                            <div className="direction__div">
                              <p className="data">Dirección</p>
                              <p className="data__direction">
                                {item.address}, {item.postalcode}{" "}
                                {item.province}
                              </p>
                              <p className="data__meters">A 543m</p>
                            </div>
                          </div>
                          <p className="data__affiliates">
                            <i className="fas fa-user-friends" />
                            {item.affiliates}
                          </p>
                      </div>
                    </div>
                  </section>
              );
            })}
          <ButtonReport onOpen={this.props.onOpen} />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Map;
