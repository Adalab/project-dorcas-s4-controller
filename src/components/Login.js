import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <section>
          <p>Controller 2</p>
          <p>Introduce tus datos para poder acceder -> </p>
        </section>
        <section>
          <label htmlFor="">Correo electrónico*</label>
          <input type="text"/>
          <label htmlFor="">Contraseña</label>
          <input type="text"/>
          <p>¿Has olvidado tu contraseña?</p>
          <button>Acceder</button>
          <p>¿No tienes una cuenta? Regístrate</p>
        </section>
      </div>
     );
    }
  }

export default Login;