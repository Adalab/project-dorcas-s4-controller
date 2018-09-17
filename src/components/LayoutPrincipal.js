import React from "react";
import BarList from "./BarList";
import DetailBar from "./DetailBar";
import MenuCollapsible from "./MenuCollapsible";
import "../stylesheet/layoutP.css";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

class LoyoutPrincipal extends React.Component {
  render() {
    return (
      <div className="layoutPrincipal">
        <MenuCollapsible
        clickmenu={this.props.clickmenu}
        colorMenuButton1={this.props.colorMenuButton1}
        colorMenuButton2={this.props.colorMenuButton2}
        />
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
          getQuestions={this.props.getQuestions}
        />
        {this.props.modalStatus && (
          <Modal questions={this.props.questions} onClose={this.props.onClose}>
            <ModalContent questions={this.props.questions} />
          </Modal>
        )}
      </div>
    );
  }
}

export default LoyoutPrincipal;
