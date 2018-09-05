import React from 'react';

class MenuCollapsible extends React.Component {

  render() {
    return (
      <nav className="menuPage">
        <div className="half-logo--container">
          <p className="text-controller">Controller<span className="text-2">2</span></p>
        </div>
        <ul className="listMenu">
          <li className="itemList">Próximas visitas</li>
          <li className="itemList">Visitas anteriores</li>
        </ul>
      </nav>
    );
  }
}

export default MenuCollapsible;