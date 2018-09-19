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
            <header className="modal__header">
              <h2 className="modal__title">Completa el cuestionario</h2>
              <p className="modal__text">Pregunta</p>
              <p className="modal__number"><span className="modal__number--first">1</span> de {(this.props.questions.length)+1}</p>
            </header>
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
