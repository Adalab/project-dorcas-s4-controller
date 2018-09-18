import React from "react";
import '../stylesheet/ModalContent.css';

class ModalContent extends React.Component {

  render() {
    if (this.props.questions.length <= 0) {
      return null;
    } else {
      return (
        <React.Fragment>
          {this.props.questions[0].questions.map((item) => {
            return (
              <div className="modal__total">
                <div className="modal__content">
                  {item.message}
                </div>
                <div className="modal__btn">
                  <button className="modal__btn--yes" id="yes" onClick={this.props.answerButtons}>Sí</button>
                  <button className="modal__btn--no" id="no" onClick={this.props.answerButtons}>No</button>
                  <button><i className={this.props.nextButton}></i></button>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      );
    }
  }
}

export default ModalContent;
