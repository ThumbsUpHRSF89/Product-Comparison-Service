import React from 'react';
import ReactDOM from 'react-dom';

function HeaderRow(props) {
  return (
    <tr id='header-row'>
      <td id="empty-first-column" width="250px" />
      {props.data.map(object =>
        <th width='250px'>
          <a href={`http://localhost:8000/${object.id}`}>
            <div>
              <img src={object.image_url} height="250px" width="250px" />
            </div>
            <div className='product-name' width='250px'>{object.name}</div>
          </a>
          <button className='purchase-button' width="250px">Add to Cart</button>
        </th>
      )}
    </tr>
  );
}

export default HeaderRow;