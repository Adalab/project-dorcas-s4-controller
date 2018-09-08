import React from 'react';
import '../stylesheet/menuPag.css';

class MenuCollapsible extends React.Component {

  render() {
    return (
      <div>
        <div
          showmenu={this.props.showmenu}
          quitmenu={this.props.quitmenu}
        >
        <p>Hover menu</p>
        </div>
          {this.props.hovering &&
          <nav className="menuPage">
            <div className="logoContainer">
              <p className="logoText">Controller<span className="logoNumber">2</span></p>
            </div>
            <ul className="containerMenu">
              <li className="buttonList">Próximas visitas</li>
              <li className="buttonList">Visitas anteriores</li>
            </ul>
          </nav>
          }
      </div>
    );
  }
}

export default MenuCollapsible;
