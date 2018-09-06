import React from 'react';
import '../stylesheet/menuPag.css';

class MenuCollapsible extends React.Component {

  render() {
    return (
      <nav className="menuPage">
        <div className="half-logo--container">
          <p className="text-controller">Controller<span className="text-2">2</span></p>
        </div>
        <ul className="containerMenu">
          <li className="buttonList">Próximas visitas</li>
          <li className="buttonList">Visitas anteriores</li>
        </ul>
      </nav>
    );
  }
}

export default MenuCollapsible;
