import React from 'react';
import ItemBar from './ItemBar';
import '../stylesheet/BarList.css'

class BarList extends React.Component {

  render() {
    return (
      <div>
        <div className="barLists">
          <ul>
            {this.props.establishments
            .map(function (item) {
                return (
                  <li className="barLists_element">
                      <ItemBar item={item} />
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BarList;