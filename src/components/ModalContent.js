import React from "react";
import '../stylesheet/ModalContent.css';
// import ReactDOM from 'react-dom';

class ModalContent extends React.Component {
  render() {
    if (this.props.questions.length<=0) {
      return null;
    } else {
      return (
        <React.Fragment>
        {this.props.questions[0].questions.map((item)=>{
          return(
            <React.Fragment>
            <div className="modal__content">
               {item.message}
            </div>
            <div className="modal__btn">
              <button className="modal__btn--yes">Sí</button>
              <button className="modal__btn--no">No</button>
            </div>
            </React.Fragment>
          );
        })}
        </React.Fragment>
      );
    }
  }
}

export default ModalContent;
