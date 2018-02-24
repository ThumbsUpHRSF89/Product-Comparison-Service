import React from 'react';
import ReactDOM from 'react-dom';
// import Comparable from 'comparable.jsx'

class ComparisonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headerImages: [],
    }
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td id='empty-first-column'></td>
            <h1>This is a test</h1>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ComparisonTable;