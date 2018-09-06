import React from 'react';
import '../stylesheet/ItemBar.css'

class ItemBar extends React.Component {

  render() {
    return (
      <div className="itemBar">
        <div className="itemBar__image">
          <img src="https://via.placeholder.com/134x134"></img>
        </div>
          <div className="itemBar__info">
            <h2 className="itemBar__info__name">Bar prueba</h2>
            <p>dirección</p>
            <p>icon</p>
            <p>numero visitas</p>
          </div>
      </div>
     );
    }
  }

export default ItemBar;
