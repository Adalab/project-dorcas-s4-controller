import React from 'react';
import BarList from './BarList';
import DetailBar from './DetailBar';
import Logout from './Logout';
import MenuCollapsible from './MenuCollapsible';
import '../stylesheet/layoutP.css';
class LoyoutPrincipal extends React.Component {
  render() {
    return (
      <div className="layoutPrincipal">
        <MenuCollapsible clickmenu={this.props.clickmenu} clickmenu2={this.props.clickmenu2} />
        <BarList establishments={this.props.establishments}/>
        <DetailBar />
        <Logout  logout={this.props.logout} email={this.props.email} />
      </div>
    );
  }
}

export default LoyoutPrincipal;
