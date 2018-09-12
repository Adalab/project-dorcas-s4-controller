import React from "react";
import BarList from "./BarList";
import DetailBar from "./DetailBar";
import Logout from "./Logout";
import MenuCollapsible from "./MenuCollapsible";
import "../stylesheet/layoutP.css";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
// import ButtonReport from './ButtonReport';

class LoyoutPrincipal extends React.Component {
  render() {
    return (
      <div className="layoutPrincipal">
        <MenuCollapsible />
        <BarList
          establishments={this.props.establishments}
          selectedEstablishment={this.props.selectedEstablishment}
          detailsEstablishment={this.props.detailsEstablishment}
          getDetails={this.props.getDetails}
        />
        <DetailBar
          establishments={this.props.establishments}
          selectedEstablishment={this.props.selectedEstablishment}
        />
        <Logout logout={this.props.logout} email={this.props.email} />
        {/* <ButtonReport
          modalStatus={this.props.modalIsOpen}
          onOpen={this.props.onOpen}
          onClose={this.props.onClose}
        /> */}
        <div className="divBtb">
          <button className="btnReport" onClick={this.props.onOpen}>
            <i className="fas fa-clipboard-list" />
            Reportar
          </button>
        </div>
        {this.props.modalStatus && (
          <Modal onClose={this.props.onClose}>
            <ModalContent />
          </Modal>
        )}
      </div>
    );
  }
}

export default LoyoutPrincipal;
