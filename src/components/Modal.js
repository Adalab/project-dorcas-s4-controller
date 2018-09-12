import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <section className="">
        <div className="">
          <header className="">
            <h2 className="">titulo</h2>
            <button className="" onClick={this.props.onClose}>
              Cerrar
            </button>
          </header>
          <div className="">{this.props.children}</div>
        </div>
        <div className="" onClick={this.props.onClose}></div>
      </section>,
      document.body
    );
  }
}

export default Modal;
