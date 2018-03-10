import React from 'react';
import ReactDOM from 'react-dom';

function HeaderRow(props) {
  return (
    <tr id='header-row'>
      <td id="empty-first-column" />
      {props.data.map(object =>
        <th key={`${object.id}.header`}>
          {/* Hardcoded link for proxy */}
          <a href={`http://localhost:8000/product/${object.id}`}>
          {/* Uncomment the line below for the link to work in as a solo module */}
          {/* <a href={`http://localhost:8003/product/${object.id}`}> */}
            <div className="image-container">
              <img src={object.image_url} className="comparison-image" />
            </div>
            <div className='product-name'>{object.name}</div>
          </a>
          <button className='purchase-button'>Add to Cart</button>
        </th>
      )}
    </tr>
  );
}

export default HeaderRow;