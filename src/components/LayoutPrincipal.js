import React from "react";
import BarList from "./BarList";
import DetailBar from "./DetailBar";
import Logout from "./Logout";
import MenuCollapsible from "./MenuCollapsible";
import "../stylesheet/layoutP.css";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

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
          onOpen={this.props.onOpen}
          email={this.props.email} logout={this.props.logout}
        />
       
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
