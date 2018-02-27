import React from 'react';
import ReactDOM from 'react-dom';

function NameRow(props) {
  return (
    <tr id='name-row'>
      <td width='250px'></td>
      {props.names.map(element =>
        <th className='product-name' width='250px'>{element}</th>
      )}
  </tr>
  );
}

export default NameRow;