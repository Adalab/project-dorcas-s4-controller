import React from 'react';
import '../stylesheet/logout.css';

class Logout extends React.Component {
  render() {
    return (
      <div className="logout">
        <p className="logoutName"></p>
        <div className="logoutIcon" ><i className="fas fa-sign-out-alt"></i></div>
      </div>
    );
  }
}

export default Logout;