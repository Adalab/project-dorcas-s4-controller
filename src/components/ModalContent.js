import React from "react";
import '../stylesheet/ModalContent.css';
// import ReactDOM from 'react-dom';

class ModalContent extends React.Component {
  render() {
    if (this.props.questions.length<=0) {
      return null;
    } else {
      console.log(this.props.questions[0].questions[0].message);
      return (
        <React.Fragment>
          <div className="modal__content">
            {/* ¿Has disfrutado de la experiencia en nuestro establecimiento? */}
            {/* {this.props.questions.questions.message} */}
          </div>
          <div className="modal__btn">
            <button className="modal__btn--yes">Sí</button>
            <button className="modal__btn--no">No</button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ModalContent;
