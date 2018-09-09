import React from 'react';
import '../stylesheet/ItemBar.css'

class ItemBar extends React.Component {
  render() {
    return (
      <div className="itemBar">
        <div className="itemBar__image">
          <img className="itemBar__image" src="https://via.placeholder.com/122x122"></img>
        </div>
        <div className="itemBar__info">
          <h2 className="itemBar__info__name">{this.props.item.name}</h2>
          <p className="itemBar__info__direction">{this.props.item.address}{this.props.item.postalcode}{this.props.item.province}</p>
          <div className="item__info__visits">
            <i className="fas fa-user-friends"></i>
            <p className="itemBar__info__visits__number">{this.props.item.affiliates}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemBar;
