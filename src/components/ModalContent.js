import React from "react";
import '../stylesheet/ModalContent.css';
// import ReactDOM from 'react-dom';

class ModalContent extends React.Component {
  render() {
    if (this.props.questions.length<=0) {
      return null;
    } else {
      if (this.props.modalQuestionFinished) {
        return (
          <div></div>
        )
      } else {
        return (
          <React.Fragment>
            <div className="modal__generic">
              <div className="modal__content">
                {this.props.questions[0].questions[this.props.modalQuestionsStage].message}
              </div>
              <div className="modal__btn">
                <button className="modal__btn--yes">Sí</button>
                <button className="modal__btn--no">No</button>
                <button className="modal__btn--no" onClick={this.props.setModalQuestionStage}>Flechita</button>
              </div>
            </div>
          {/* {this.props.questions[0].questions.map((item)=>{
            return(
              <div className="modal__generic">
                <div className="modal__content">
                   {item.message}
                </div>
                <div className="modal__btn">
                  <button className="modal__btn--yes">Sí</button>
                  <button className="modal__btn--no">No</button>
                </div>
              </div>
            );
          })} */}
          </React.Fragment>
        );
      }
    }
  }
}

export default ModalContent;
