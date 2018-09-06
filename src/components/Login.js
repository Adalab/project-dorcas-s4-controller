import React from "react";
import "../stylesheet/loginPage.css";

class Login extends React.Component {
  /*React.createRef() es como si hiciesemos const inputEmail=document.querySelector('')
  hace referencia al DOM y crea la etiqueta en el html y así se relaciona*/
  inputEmail = React.createRef();
  inputPassword = React.createRef();

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.focusEmail = this.focusEmail.bind(this);
    this.focusPassword = this.focusPassword.bind(this);
  }
  focusEmail() {
    this.inputEmail.current.focus();
   
  }
  focusPassword(){
    this.inputPassword.current.focus();
  }
  onClickButton() {
    // el evento click en el boton de acceder pasamos al método launchLogin, que está en App.js
    //los valores como parámetros de username y el password
    if(this.inputEmail.current.value.length<=0){
      this.focusEmail();
      
    }else if(this.inputPassword.current.value.length<=0){
      this.focusPassword();
    }else{
    this.props.launchLogin(
      this.inputEmail.current.value,
      this.inputPassword.current.value
    );
  }
  }

  render() {
    return (
      <div className="login-page">
        <section className="half-logo">
          <div className="half-logo--container">
            <p className="half-logo--welcome">Bienvenido a</p>

            <p className="text-controller">
              Controller
              <span className="text-2">2</span>
            </p>
          </div>
          <p className="text-arrow">
            Introduce tus datos para poder acceder{" "}
            <i className="fas fa-angle-right access-arrow" />
          </p>
        </section>
        <section className="half-form">
          <div className="form-inputs">
            <label className="label-form" htmlFor="">
              Correo electrónico *
            </label>
            {/* en los input crea la etiqueta ref con el this.inputEmail */}
            <input
              className="form-input form-input--top"
              placeholder="Escribe tu email"
              ref={this.inputEmail}
              type="text"
            />
            <label className="label-form" htmlFor="">
              Contraseña *
            </label>
            {/* en los input crea la etiqueta ref con el this.inputPassword */}
            <input
              className="form-input"
              placeholder="Escribe tu contraseña"
              ref={this.inputPassword}
              type="text"
            />
          </div>
          <div className="form-password">
            <p>¿Has olvidado tu contraseña?</p>
          </div>
          {/*evento onclick para pasarle al método launchLogin los valores 
          que se ha escrito en los inputs de username y password*/}
          <div className="form-button">
            <button className="form-button-send" onClick={this.onClickButton}>
              Acceder
            </button>
          </div>
          <p className="form-registry">
            ¿No tienes una cuenta?{" "}
            <span className="registry-text">Regístrate</span>{" "}
            <i className="fas fa-angle-right registry-arrow" />
          </p>
        </section>
      </div>
    );
  }
}

export default Login;
