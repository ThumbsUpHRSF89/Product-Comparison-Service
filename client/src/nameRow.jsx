import React from 'react';
import ReactDOM from 'react-dom';

function NameRow(props) {
  return (
    <tr id='name-row'>
      <td id="empty-first-column" width="250px" />
      {props.data.map(object =>
        <td width='250px'>
        <a href={`http://localhost:8000/${object.id}`}>
          <th className='product-name' width='250px'>{object.name}</th>
        </a>
        </td>
      )}
    </tr>
  );
}

export default NameRow;