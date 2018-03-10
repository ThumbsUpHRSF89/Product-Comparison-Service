import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HeaderRow from './headerRow';

class ComparisonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      attributes: [],
    };
  }

  parseAttributesNoImageNoNameNoIdNoUndersNoCategory() {
    let arrAttributes = [];
    let objData = {};
    if (this.state.data[0]) {
      objData = JSON.parse(JSON.stringify(this.state.data[0]));
      delete objData.name;
      delete objData.image_url;
      delete objData.id;
      delete objData._id;
      delete objData.__v;
      delete objData.category;
      arrAttributes = Object.keys(objData);
    }
    this.setState({
      attributes: arrAttributes,
    });
  }

  englishCasing(string) {
    let arrString = string.split('');
    arrString[0] = arrString[0].toUpperCase();
    for (var i = arrString.length - 1; i > 0; i--) {
      if (arrString[i].toUpperCase() === arrString[i]) {
        arrString.splice(i, 0, ' ');
      }
    }
    return arrString.join('');
  }

  getData() {
    const { location: { pathname } } = window;
    const productID = Number(pathname.slice(0, -1).split('/').pop());
    $.ajax({
      // port for my db call
      url: 'http://localhost:8003/compareproducts/' + productID,
      type: 'GET',
      success: serverData => {
        this.setState({
          data: serverData,
        });
        this.parseAttributesNoImageNoNameNoIdNoUndersNoCategory();
      },
      failure: err => {
        console.log('error = ', error);
      },
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <table id="table">
        <tbody className="tables">
          <HeaderRow data={this.state.data} />
          {this.state.attributes.map(property => (
            <tr key={property}>
              <td className="object-property-cell">{this.englishCasing(property)}</td>
              {this.state.data.map((object, index) =>
                <td key={object.name + property} className={`object-${index}`}>{object[property]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ComparisonTable;
