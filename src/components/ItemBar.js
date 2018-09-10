import React from 'react';
import '../stylesheet/ItemBar.css';

class ItemBar extends React.Component {
  render() {
    return (
      <div className="itemBar" >
        <div className="itemBar__image">
          <img src="https://via.placeholder.com/134x134"></img>
        </div>
        <div className="itemBar_info">
          <h2>{this.props.item.name}</h2>
          <p>{this.props.item.address}{this.props.item.postalcode}{this.props.item.province}</p>
          <p><span>icon</span>{this.props.item.affiliates}</p>
        </div>
      </div>
    );
  }
}

export default ItemBar;
