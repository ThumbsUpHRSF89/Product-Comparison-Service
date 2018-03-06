import React from 'react';
import ReactDOM from 'react-dom';

function HeaderRow(props) {
  return (
    <tr id='header-row'>
      <td id="empty-first-column" width="250px" />
      {props.data.map(object =>
        <td width='250px'>
          <a href={`http://localhost:8000/${object.id}`}>
            <div>
              <img src={object.image_url} height="250px" width="250px" />
            </div>
            <th className='product-name' width='250px'>{object.name}</th>
          </a>
          <button className='purchase-button' width="250px">Add to Cart</button>
        </td>
      )}
    </tr>
  );
}

export default HeaderRow;