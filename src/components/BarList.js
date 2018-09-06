import React from 'react';
import ItemBar from './ItemBar';
import '../stylesheet/BarList.css'

class BarList extends React.Component {
 
  render() {
    return (
        <div>
          <div className="barLists">
            <li className="barLists_element ">
              <ItemBar />
              <ItemBar />
              <ItemBar />
              <ItemBar />
              <ItemBar />
              <ItemBar />
              <ItemBar />
              <ItemBar />
              <ItemBar />
            </li>
          </div>
        </div>
     );
    }
  }

export default BarList;