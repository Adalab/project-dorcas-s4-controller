import React from 'react';

class MenuCollapsible extends React.Component {

  render() {
    return (
      <nav className="menuPage">
        <h2>Controller 2</h2>
        <li>
          <ul>Próximas visitas</ul>
          <ul>Visitas anteriores</ul>
        </li>
      </nav>
    );
  }
}

export default MenuCollapsible;