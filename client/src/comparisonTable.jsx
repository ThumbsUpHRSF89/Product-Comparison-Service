import React from 'react';
import ReactDOM from 'react-dom';

class ComparisonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: 50,
        name: 'Lead Ballon',
        image_url: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-04.jpg?itok=dEigMkKk&fc=50,50',
        category: 'drone' },
      { id: 51,
        name: 'Halo',
        image_url: 'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/3/4/3495037_1.jpg',
        category: 'drone' },
      { id: 52,
        name: 'Typhoon',
        image_url: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-04.jpg?itok=dEigMkKk&fc=50,50',
        category: 'drone' },
      { id: 53,
        name: 'Constitution',
        image_url: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-00.jpg?itok=lfMW1KUQ&fc=50,50',
        category: 'drone' },
      { id: 54,
        name: 'Halo',
        image_url: 'https://i0.wp.com/thedronegirl.com/wp-content/uploads/2016/07/MG_1612.jpg?resize=1024%2C683',
        category: 'drone' },],
      headerImages: [],
      names: [],
      attributes: [],
    }
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

  parseAttributesNoImageNoName() {
    let arrAttributes = []
    let objData = {};
    if (this.state.data[0]) {
      objData = JSON.parse(JSON.stringify(this.state.data[0]));
      delete objData.name;
      delete objData.image_url;
      arrAttributes = Object.keys(objData);
    }
    this.setState({
      attributes: arrAttributes,
    })
  }

  componentDidMount() {
    this.parseImagesAndNames();
    this.parseAttributesNoImageNoName();
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
          <tr id='name-row'>
            <td width='250px'></td>
            {this.state.names.map(element =>
              <td width='250px'>{element}</td>
            )}
          </tr>
          {this.state.attributes.map(property => 
            <tr id={property}>
              <td>{property}</td>
              {this.state.data.map(object => 
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