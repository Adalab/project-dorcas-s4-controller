import React from 'react';
import '../stylesheet/Notification.css';

class Notification extends React.Component {
  render() {
    return (
      <div className="box">
        <p>El nombre de usuario y/o la contraseña no son correctos</p>
      </div>
     );
    }
  }

export default Notification;