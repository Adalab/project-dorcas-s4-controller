import React from 'react';
import '../stylesheet/menuPag.css';

class MenuCollapsible extends React.Component {
  render() {
    return (
      <div className="menuColumn">
        <nav className="menuPage">
          <div className="logoContainer">
            <p className="logoText">Controller<span className="logoNumber">2</span></p>
          </div>
          <ul className="containerMenu">
            <li className={this.props.colorMenuButton1} id="button1" onClick={this.props.clickmenu} >Próximas visitas</li>
            <li className={this.props.colorMenuButton2} id="button2" onClick={this.props.clickmenu} >Visitas anteriores</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuCollapsible;
