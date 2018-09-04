import React from 'react';
import ItemBar from './ItemBar';
class BarList extends React.Component {
 
  render() {
    return (
        <nav>
          <h2>Controller 2</h2>
          <li>
             <ItemBar />
             
          </li>
        </nav>
     );
    }
  }

export default BarList;