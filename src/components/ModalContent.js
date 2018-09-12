import React from "react";
// import ReactDOM from 'react-dom';

class ModalContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="modal__content">
          ¿Has disfrutado de la experiencia en nuestro establecimiento?
        </div>
        <button className="modal__btn--yes">Sí</button>
        <button className="modal__btn--no">No</button>
      </React.Fragment>
    );
  }
}

export default ModalContent;
