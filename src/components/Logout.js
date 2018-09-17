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
        <p className="logout__name">{this.props.email} |<span className="logout__icon"><i onClick={this.onClickLogout} className="fas fa-sign-out-alt"></i></span></p>
      </div>
    );
  }
}

export default Logout;