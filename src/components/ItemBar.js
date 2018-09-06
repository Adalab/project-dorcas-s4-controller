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
            <p className="itemBar__info__direction">C/ de Bailén 19, 28013 Madrid</p>
            <div className="item__info__visits">
              <p className="intemBar__info__visits__icon"><i className="far fa-user-friends"></i></p>
              <p className="itemBar__info__visits__number">53</p>
            </div>
          </div>
      </div>
     );
    }
  }

export default ItemBar;
