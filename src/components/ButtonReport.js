import React from "react";

class ButtonReport extends React.Component {
  constructor(props) {
    super(props);
    this.modalOnClick=this.modalOnClick.bind(this);
    
  }
  modalOnClick(){
    this.props.onOpen();
    this.props.getQuestions();
  }



  render() {
    return (
      <React.Fragment>
        <div className="divBtb">
          <button className="btnReport" onClick={this.modalOnClick}>
            <i className="fas fa-clipboard-list" />
            Reportar
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonReport;
