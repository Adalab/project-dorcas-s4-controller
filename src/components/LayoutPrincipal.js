import React from 'react';
import BarList from './BarList';
import DetailBar from './DetailBar';
import Logout from './Logout';
import MenuCollapsible from './MenuCollapsible';

class LoyoutPrincipal extends React.Component {
  render() {
    return (
      <div>
        <Logout email={this.props.email} />
        <MenuCollapsible />
        <BarList />
        <DetailBar />
      </div>
    );
  }
}

export default LoyoutPrincipal;