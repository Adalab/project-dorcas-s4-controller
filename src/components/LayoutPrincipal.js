import React from 'react';
import BarList from './BarList';
import DetailBar from './DetailBar';
import Logout from './Logout';
import MenuCollapsible from './MenuCollapsible';
import '../stylesheet/layoutP.css';
class LoyoutPrincipal extends React.Component {
  render() {
    return (
		<div class="layoutPrincipal">
			<MenuCollapsible  />
			<BarList  />
			<DetailBar />
			<Logout  email={this.props.email} />
		</div>
    
    );
  }
}

export default LoyoutPrincipal;