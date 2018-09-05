import React from 'react';

class MenuCollapsible extends React.Component {

  render() {
    return (
      <nav className="menuPage">
        <div className="half-logo--container">
          <p className="text-controller">Controller<span className="text-2">2</span></p>
        </div>
        <li>
          <ul>Próximas visitas</ul>
          <ul>Visitas anteriores</ul>
        </li>
      </nav>
    );
  }
}

export default MenuCollapsible;