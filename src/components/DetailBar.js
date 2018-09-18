import React from "react";
import "../stylesheet/map.css";
import "../stylesheet/buttons.css";
import "../stylesheet/detailBar.css";
import ButtonReport from './ButtonReport';
import GoogleMapsContainer from "./GoogleMapsContainer";
import Logout from "./Logout";

class DetailBar extends React.Component {
  render() {
    if (this.props.establishments.data === undefined) {
      return null;
    } else {
    let establishmentFilter= this.props.establishments.data.filter(detailEstablishment => {
      return (
        detailEstablishment.establishmentId ===
        this.props.selectedEstablishment
      );
    })
      return (
        <React.Fragment>
          <div className="establishments">
          <Logout logout={this.props.logout} email={this.props.email} />
                  <section className="sectionDetails">
                    <div className="container__maps">
                      <GoogleMapsContainer establishmentFilter={establishmentFilter[0]} />
                    </div>
                    <div className="establishments__div__details">
                      <div className="details__img">
                        <div
                          className="imgDetails"
                          style={{
                            backgroundImage: `url(https://ada-controller.deploy-cd.com/${
                              establishmentFilter[0].imageWebUri
                            })`
                          }}
                        />
                      </div>
                      <div className="details__data">
                          <h2 className="data__title">{establishmentFilter[0].name}</h2>
                          <div className="data__div__direction">
                            <p className="direction__icon">
                              <i className="fas fa-map-marker-alt" />
                            </p>
                            <div className="direction__div">
                              <p className="data">Dirección</p>
                              <p className="data__direction">
                                {establishmentFilter[0].address}, {establishmentFilter[0].postalcode}{" "}
                                {establishmentFilter[0].province}
                              </p>
                              <p className="data__meters">A 543m</p>
                            </div>
                          </div>
                          <p className="data__affiliates">
                            <i className="fas fa-user-friends" />
                            {establishmentFilter[0].affiliates}
                          </p>
                      </div>
                    </div>
                  </section>
          <ButtonReport onOpen={this.props.onOpen}
            establishmentFilter={establishmentFilter[0].challengeId}
            getQuestions={this.props.getQuestions}
          />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default DetailBar;
