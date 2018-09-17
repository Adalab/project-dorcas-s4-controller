import React from "react";
import  '../stylesheet/ModalContent.css';
// import ReactDOM from 'react-dom';

class ModalContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="modal__content">
          ¿Has disfrutado de la experiencia en nuestro establecimiento?
        </div>
        <div className="modal__btn">
          <button className="modal__btn--yes">Sí</button>
          <button className="modal__btn--no">No</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalContent;
