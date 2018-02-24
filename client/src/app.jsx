import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <h1>Sup, I'm an app</h1>
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