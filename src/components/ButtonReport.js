import React from "react";

class ButtonReport extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="divBtb">
          <button className="btnReport" onClick={this.props.onOpen}>
            <i className="fas fa-clipboard-list" />
            Reportar
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonReport;
