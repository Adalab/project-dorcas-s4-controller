import React from 'react';
import '../stylesheet/ItemBar.css'

class ItemBar extends React.Component {

  render() {
    return (
      <div className="itemBar">
        <div className="itemBar_image">
          <img src="https://via.placeholder.com/134x134"></img>
        </div>
          <div className="itemBar_info">
            <h2>Bar prueba</h2>
            <p>dirección</p>
            <p>icon</p>
            <p>numero visitas</p>
          </div>
      </div>
     );
    }
  }

export default ItemBar;
