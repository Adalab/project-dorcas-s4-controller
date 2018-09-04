import React from 'react';

class Login extends React.Component {
  /*React.createRef() es como si hiciesemos const inputEmail=document.querySelector('')
  hace referencia al DOM y crea la etiqueta en el html y así se relaciona*/
  inputEmail = React.createRef();
  inputPassword = React.createRef();

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    // el evento click en el boton de acceder pasamos al método launchLogin, que está en App.js
    //los valores como parámetros de username y el password
    this.props.launchLogin(
      this.inputEmail.current.value,
      this.inputPassword.current.value
    );
  }

  render() {
    return (
      <div>
        <section>
          <p>Controller 2</p>
          <p>Introduce tus datos para poder acceder -> </p>
        </section>
        <section>
          <label htmlFor="">Correo electrónico*</label>
          {/* en los input crea la etiqueta ref con el this.inputEmail */}
          <input ref={this.inputEmail} type="text"/>
          <label htmlFor="">Contraseña</label>
           {/* en los input crea la etiqueta ref con el this.inputPassword */}
          <input ref={this.inputPassword} type="text"/>
          <p>¿Has olvidado tu contraseña?</p>
          {/*evento onclick para pasarle al método launchLogin los valores 
          que se ha escrito en los inputs de username y password*/}
          <button onClick={this.onClickButton}>Acceder</button>
          <p>¿No tienes una cuenta? Regístrate</p>
        </section>
      </div>
     );
    }
  }

export default Login;