import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonTable from './comparisonTable.jsx';


function App () {
  return(
    <div>
      <h2 id='table-title'>Compare with similar items</h2>
      <ComparisonTable/>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: []
//     }
//   }

//   render() {
//     return(
//       <div>
//         <h2 id='table-title'>Compare with similar items</h2>
//         <ComparisonTable/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <App/>, document.getElementById('app')
// );

window.App = App;