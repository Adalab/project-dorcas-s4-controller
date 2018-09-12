import React from "react";
import ReactDOM from "react-dom";
import '../stylesheet/modal.css';

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <section className="modal">
        <div className="modal__panel">
          <header className="modal__header">
            <h2 className="modal__title">titulo</h2>
          </header>
          <div className="modal__container">{this.props.children}</div>
        </div>
        <div className="modal__overlay" onClick={this.props.onClose}></div>
      </section>,
      document.body
    );
  }
}

export default Modal;
