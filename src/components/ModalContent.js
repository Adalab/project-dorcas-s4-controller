import React from "react";
import '../stylesheet/ModalContent.css';

class ModalContent extends React.Component {
  render() {
    if (this.props.questions.length <= 0) {
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
                <button className={this.props.modalButtonYes} id="yes" onClick={this.props.modalButtons} >Sí</button>
                <button className={this.props.modalButtonNo} id="no" onClick={this.props.modalButtons} >No</button>
                <button className="buttonArrow" onClick={this.props.setModalQuestionStage}><i className={this.props.nextButton}></i></button>
              </div>
            </div>
          </React.Fragment>
        );
      }
    }
  }
}

export default ModalContent;
