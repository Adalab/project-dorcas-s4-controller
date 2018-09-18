import React from "react";
import '../stylesheet/ModalContent.css';

class ModalContent extends React.Component {
  forQuestions() {
    console.log(this.props.questions[0].questions.length);
    for (let i = 0; i < this.props.questions[0].questions.length; i++) {
      // console.log(this.props.questions[0].questions[i].message);
      return (
        <React.Fragment>
        <li className={this.props.stateQuestion}>{this.props.questions[0].questions[0].message}</li>
        <li className={this.props.stateQuestion}>{this.props.questions[0].questions[1].message}</li>
        </React.Fragment>
      );
    }
  }
  render() {
    if (this.props.questions.length <= 0) {
      return null;
    } else {
      return (
        <React.Fragment>
          <div className="modal__total">
            <ul className="modal__content">
              {this.forQuestions()}
              {/* {this.props.questions[0].questions.map((item, index) => {
                return ( */}
              {/* <li className={this.props.stateQuestion} key={index} id={item.id}>
                    {item.message}
                  </li> */}
              {/* );
              })} */}
            </ul>
            <div className="modal__btn">
              <button className="modal__btn--yes" id="yes" onClick={this.props.answerButtons}>Sí</button>
              <button className="modal__btn--no" id="no" onClick={this.props.answerButtons}>No</button>
              <button onClick={this.props.nextQuestion}><i className={this.props.nextButton}></i></button>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ModalContent;
