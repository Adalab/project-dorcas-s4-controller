import React from 'react';
import '../stylesheet/logout.css';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div className="logout">
        <p className="logoutName">{this.props.email}</p>
        <div className="logoutIcon" onClick={this.onClickLogout} ><i className="fas fa-sign-out-alt"></i></div>
      </div>
    );
  }
}

export default Logout;