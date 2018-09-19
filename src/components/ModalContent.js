import React from "react";
import '../stylesheet/ModalContent.css';

class ModalContent extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.saveAnswer=this.saveAnswer.bind(this);
  // }
  // saveAnswer(e){
  //   this.props.setModalQuestionStage();
  //   // this.buttonNo.current.value;
  //   // this.buttonYes.current.value;
  //   if(this.props.modalQuestionsStage===0){
  //     if (e.currentTarget.getAttribute('id') === 'yes'){
  //      return(<p>Sí</p>);
  //     }else{
  //       return(<p>No</p>);
  //     }
  //   }else{
  //     if (e.currentTarget.getAttribute('id') === 'yes'){
  //       return(<p>Sí</p>);
  //     }else{
  //       return(<p>No</p>);
  //     }
  //   }
    
  // }

  render() {
    
    if (this.props.questions.length <= 0) {
      return null;
    } else {
      if (this.props.modalQuestionFinished) {
        return (
          <div>
            <header className="modal__header">
              <h2 className="modal__title">Resumen del cuestionario</h2>
            </header>
            <div className="modal__summary__content">
              <ol className="modal__summary__list">
                <li className="modal__summary__list__item">{this.props.questions[0].questions[0].message}</li>
                <p className="modal__summary__answers">{this.props.answers[0]}</p>
                <li className="modal__summary__list__item">{this.props.questions[0].questions[1].message}</li>
                <p className="modal__summary__answers">{this.props.answers[1]}</p>
              </ol>
            </div>
          </div>
        )
      } else {
        return (
          <React.Fragment>
            <header className="modal__header">
              <h2 className="modal__title">Completa el cuestionario</h2>
              <p className="modal__text">Pregunta</p>
              <p className="modal__number"><span className="modal__number--first">{(this.props.modalQuestionsStage) + 1}</span> de {(this.props.questions.length) + 1}</p>
            </header>
            <div className="modal__generic">
              <div className="modal__content">
                {this.props.questions[0].questions[this.props.modalQuestionsStage].message}
              </div>
              <div className="modal__btn">
                {/* <input className={this.props.modalButtonYes}  id="yes" onClick={this.props.modalButtons} type="button" value="Sí"></input> */}
                <button className={this.props.modalButtonYes}  id="yes" onClick={eventClick => {
                  this.props.modalButtons(eventClick, 'Sí');}} >Sí</button>
                {/* <input className={this.props.modalButtonNo}  id="no" onClick={this.props.modalButtons} type="button" value="No"></input> */}
                <button className={this.props.modalButtonNo}  id="no" onClick={eventClick => {
                  this.props.modalButtons(eventClick, 'No');}} >No</button>
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
