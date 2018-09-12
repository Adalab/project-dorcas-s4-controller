import React from "react";
import Modal from './Modal';
import ModalContent from './ModalContent';

class ButtonReport extends React.Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default ButtonReport;
