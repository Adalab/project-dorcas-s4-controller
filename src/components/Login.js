import React from 'react';

class Login extends React.Component {
  inputEmail = React.createRef();
  inputPassword = React.createRef();

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
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
          <input ref={this.inputEmail} type="text"/>
          <label htmlFor="">Contraseña</label>
          <input ref={this.inputPassword} type="text"/>
          <p>¿Has olvidado tu contraseña?</p>
          <button onClick={this.onClickButton}>Acceder</button>
          <p>¿No tienes una cuenta? Regístrate</p>
        </section>
      </div>
     );
    }
  }

export default Login;