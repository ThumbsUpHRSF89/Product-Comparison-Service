import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonTable from './comparisonTable.jsx';
import CSS from '../dist/styles.css';
// const CSS = require('../dist/styles.css');

function App () {
  return(
    <div>
      <h2 id='table-title'>Compare with similar items</h2>
      <ComparisonTable/>
    </div>
  );
}

// We could issue the render command here, but we're issuing it on the proxy html & module html instead
// ReactDOM.render(
//   <App/>, document.getElementById('productComparison')
// );

window.productComparison = App;