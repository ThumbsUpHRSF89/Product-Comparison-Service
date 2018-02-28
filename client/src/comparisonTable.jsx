import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NameRow from './nameRow';

class ComparisonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headerImages: [],
      names: [],
      attributes: [],
    }
    this.getData = this.getData.bind(this);
  }

  parseImagesAndNames() {
    let arrImages = [];
    let arrNames = [];
    this.state.data.forEach(object => {
      arrImages.push(object.image_url);
      arrNames.push(object.name);
    })
    this.setState({
      headerImages: arrImages,
      names: arrNames,
    })
  }

  parseAttributesNoImageNoNameNoId() {
    let arrAttributes = []
    let objData = {};
    if (this.state.data[0]) {
      objData = JSON.parse(JSON.stringify(this.state.data[0]));
      delete objData.name;
      delete objData.image_url;
      delete objData.id;
      arrAttributes = Object.keys(objData);
    }
    this.setState({
      attributes: arrAttributes,
    })
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

  // componentDidMount() {
  //   this.parseImagesAndNames();
  //   this.parseAttributesNoImageNoNameNoId();
  // }

  getData() {
    $.ajax({
      url: '/compareproducts',
      type: 'GET',
      success: (serverData) => {
        console.log('server data = ', serverData);
        this.setState({
          data: serverData
        })
        this.parseImagesAndNames();
        this.parseAttributesNoImageNoNameNoId();
      },
      failure: (err) => {
        console.log('error = ', error);
      }
    });
  }

  componentDidMount() {
    this.getData();
    // this.parseImagesAndNames();
    // this.parseAttributesNoImageNoNameNoId();
    console.log('in componentDidMount');
  }

  render() {
    return (
      <table>
        <tbody className='tables'>
          <tr id='image-row'>
            <td id='empty-first-column' height='250px' width='250px'></td>
            {this.state.headerImages.map(link => 
              <td><img src={link} height='250px' width='250px'/></td>
            )}
          </tr>
          <NameRow names={this.state.names}/>
          <tr>
            {this.state.data.map(element => 
              <button width='250px'>Add to Cart</button>
            )}
          </tr>
          {this.state.attributes.map(property => 
            <tr id={property}>
              <td>{this.englishCasing(property)}</td>
              {this.state.data.map(object => /*Ask toby why curly boys broke the mapping here- curlies are for multiple lines?*/
                <td>{object[property]}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default ComparisonTable;