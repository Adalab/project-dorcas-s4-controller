import React from "react";
import BarList from "./BarList";
import DetailBar from "./DetailBar";
import MenuCollapsible from "./MenuCollapsible";
import "../stylesheet/layoutP.css";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

class LayoutPrincipal extends React.Component {
  render() {
    return (
      <div className="layoutPrincipal">
        <MenuCollapsible
          clickmenu={this.props.clickmenu}
          colorMenuButton1={this.props.colorMenuButton1}
          colorMenuButton2={this.props.colorMenuButton2}
        />
        <BarList
          establishments={this.props.establishments}
          selectedEstablishment={this.props.selectedEstablishment}
          detailsEstablishment={this.props.detailsEstablishment}
          getDetails={this.props.getDetails}
        />
        <DetailBar
          establishments={this.props.establishments}
          selectedEstablishment={this.props.selectedEstablishment}
          onOpen={this.props.onOpen}
          email={this.props.email} logout={this.props.logout}
          getQuestions={this.props.getQuestions}
        />
        {this.props.modalStatus && (
          <Modal questions={this.props.questions} onClose={this.props.onClose} modalQuestionsStage={this.props.modalQuestionsStage} >
            <ModalContent
              questions={this.props.questions}
              detailsEstablishment={this.props.detailsEstablishment}
              modalQuestionsStage={this.props.modalQuestionsStage}
              setModalQuestionStage={this.props.setModalQuestionStage}
              modalQuestionFinished={this.props.modalQuestionFinished}
              nextButton={this.props.nextButton}
              answerButtons={this.props.answerButtons}
              modalButtons={this.props.modalButtons}
              modalButtonYes={this.props.modalButtonYes}
              modalButtonNo={this.props.modalButtonNo}
              answers = {this.props.answers}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default LayoutPrincipal;
