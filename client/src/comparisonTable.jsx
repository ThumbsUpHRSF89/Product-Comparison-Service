import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HeaderRow from './headerRow';

class ComparisonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 50,
          name: 'Mavic Pro',
          price: 525,
          weight: 3,
          manufacturer: 'Ambarella',
          dimensions: '4 x 9 x 6 inches',
          color: 'Vermillion',
          image_url:
            'https://truimg.toysrus.com/product/images/sharper-image-rechargeable-dx-2-stunt-drone-2.4-ghz-black--54BCFCEC.zoom.jpg?fit=inside|485:485',
          category: 'drone',
          overallReview: 5,
          reviewNumber: 365,
        },
        {
          id: 51,
          name: 'Hornet',
          price: 566,
          weight: 6,
          manufacturer: 'Parrot SA',
          dimensions: '7 x 10 x 7 inches',
          color: 'Vermillion',
          image_url:
            'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-02.jpg?itok=ZcNajxlf&fc=50,50',
          category: 'drone',
          overallReview: 3,
          reviewNumber: 256,
        },
        {
          id: 52,
          name: 'Titanic',
          price: 999,
          weight: 2,
          manufacturer: 'Dajiang Innovations',
          dimensions: '8 x 7 x 7 inches',
          color: 'White',
          image_url:
            'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-08.jpg?itok=dEigMkKk&fc=50,50',
          category: 'drone',
          overallReview: 1,
          reviewNumber: 81,
        },
        {
          id: 53,
          name: 'Spark',
          price: 1018,
          weight: 2,
          manufacturer: 'Ambarella',
          dimensions: '17 x 8 x 6 inches',
          color: 'White',
          image_url:
            'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-07.jpg?itok=dEigMkKk&fc=50,50',
          category: 'drone',
          overallReview: 5,
          reviewNumber: 259,
        },
        {
          id: 54,
          name: 'Eagle',
          price: 639,
          weight: 2,
          manufacturer: 'GoPro',
          dimensions: '15 x 8 x 7 inches',
          color: 'White',
          image_url:
            'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-02.jpg?itok=ZcNajxlf&fc=50,50',
          category: 'drone',
          overallReview: 1,
          reviewNumber: 339,
        },
      ],
      attributes: [],
    };
    this.getData = this.getData.bind(this);
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

  // componentDidMount() {
  //   this.parseImagesAndNames();
  //   this.parseAttributesNoImageNoNameNoIdNoUndersNoCategory();
  // }

  getData() {
    const { location: { pathname } } = window;
    const productID = Number(pathname.slice(0, -1).split('/').pop());
    // console.log('pathname = ', pathname);
    // console.log('productId = ', productID)
    $.ajax({
      url: '/compareproducts/' + productID,
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
      <table>
        <tbody className="tables">
          <HeaderRow data={this.state.data} />
          {this.state.attributes.map(property => (
            <tr id={property}>
              <td>{this.englishCasing(property)}</td>
              {this.state.data.map((
                object /*Ask toby why curly boys broke the mapping here- curlies are for multiple lines?*/,
              ) => <td>{object[property]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ComparisonTable;
