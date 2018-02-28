const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')))

let dummyData1 = [
  { id: 50,
  name: 'Mavic Pro',
  price: 525,
  weight: 3,
  manufacturer: 'Ambarella',
  dimensions: '4 x 9 x 6 inches',
  color: 'Vermillion',
  image_url: 'https://truimg.toysrus.com/product/images/sharper-image-rechargeable-dx-2-stunt-drone-2.4-ghz-black--54BCFCEC.zoom.jpg?fit=inside|485:485',
  category: 'drone',
  overallReview: 5,
  reviewNumber: 365 },
  { id: 51,
    name: 'Hornet',
    price: 566,
    weight: 6,
    manufacturer: 'Parrot SA',
    dimensions: '7 x 10 x 7 inches',
    color: 'Vermillion',
    image_url: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-02.jpg?itok=ZcNajxlf&fc=50,50',
    category: 'drone',
    overallReview: 3,
    reviewNumber: 256 },
  { id: 52,
    name: 'Titanic',
    price: 999,
    weight: 2,
    manufacturer: 'Dajiang Innovations',
    dimensions: '8 x 7 x 7 inches',
    color: 'White',
    image_url: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-08.jpg?itok=dEigMkKk&fc=50,50',
    category: 'drone',
    overallReview: 1,
    reviewNumber: 81 },
  { id: 53,
    name: 'Spark',
    price: 1018,
    weight: 2,
    manufacturer: 'Ambarella',
    dimensions: '17 x 8 x 6 inches',
    color: 'White',
    image_url: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-07.jpg?itok=dEigMkKk&fc=50,50',
    category: 'drone',
    overallReview: 5,
    reviewNumber: 259 },
  { id: 54,
    name: 'Eagle',
    price: 639,
    weight: 2,
    manufacturer: 'GoPro',
    dimensions: '15 x 8 x 7 inches',
    color: 'White',
    image_url: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-02.jpg?itok=ZcNajxlf&fc=50,50',
    category: 'drone',
    overallReview: 1,
    reviewNumber: 339 },
]

app.get('/compareproducts/:Id', (req, res) => {
  console.log('req.params = ', req.params);
  res.send(dummyData1);
});

// app.get('/compareproducts', (req, res) => {
//   console.log('getting ajax request');
//   res.send(dummyData);
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/'));
});



// app.get('/compareproducts/:Id', (req, res) => {
//   console.log('req.params.Id = ', req.params.Id)
//   console.log('im in the get / request');
//   res.send(dummyData);
// });

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});