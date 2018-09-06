import React from 'react';
import BarList from './BarList';
import DetailBar from './DetailBar';
import Logout from './Logout';
import MenuCollapsible from './MenuCollapsible';

class LoyoutPrincipal extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12"> <Logout  email={this.props.email} /></div>
        <div className="col-4"><MenuCollapsible  /></div>
        <div className="col-4"><BarList  /></div>
        <div className="col-4"><DetailBar /></div>
      </div>
    );
  }
}

export default LoyoutPrincipal;