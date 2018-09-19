import React from "react";
import ReactDOM from "react-dom";
import '../stylesheet/modal.css';

class Modal extends React.Component {
  render() {
    if (this.props.questions.length <= 0) {
      return null;
    } else {
      return ReactDOM.createPortal(
        <section className="modal">
          <div className="modal__panel">
            <div className="modal__container">{this.props.children}</div>
          </div>
          <div className="modal__overlay" onClick={this.props.onClose}></div>
        </section>,
        document.body
      );
    }
  }
}

export default Modal;
