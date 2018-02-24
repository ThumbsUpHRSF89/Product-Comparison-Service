import React from 'react';
import ReactDOM from 'react-dom';
// import Comparable from 'comparable.jsx'

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
    }
  }

  parseImageUrls() {
    let arrImages = [];
    this.state.data.forEach(object => {
      arrImages.push(object.image_url);
    })
    this.setState({
      headerImages:arrImages
    })
  }

  componentDidMount() {
    this.parseImageUrls();
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td id='empty-first-column'></td>
            {this.state.headerImages.map(link => 
              <img src={link}/>
            )}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ComparisonTable;