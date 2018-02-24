import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonTable from './comparisonTable.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div>
        <h2 id='table-title'>Compare with similar items</h2>
        <ComparisonTable/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
);

// console.log('Hi there');

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>Sup, I'm an app!</h1>,
//   document.getElementById('app')
// );