import React from 'react';
import '../stylesheet/menuPag.css';

class MenuCollapsible extends React.Component {
  render() {
    return (
      <nav className="menuPage">
        <div className="logoContainer">
          <p className="logoText">Controller<span className="logoNumber">2</span></p>
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
