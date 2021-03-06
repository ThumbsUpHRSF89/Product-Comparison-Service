const express = require('express');
const path = require('path');
const cors = require("cors");
const app = express();
const controller = require('../database/controllers/controller.js');
const models = require('../database/models/modelSchema.js');
const utilities = require('../utilities/chooseRandomFour');

app.use(cors());

app.use('/product/:Id', express.static(path.join(__dirname, '/../client/dist')));

app.use('/favicon.ico', (req, res) => {
  res.send('/../client/dist');
})

app.use('/compareproducts/:Id', (req, res) => {
  console.log('req.params.Id = ', req.params.Id);
  let productId = parseInt(req.params.Id);
  let dataForServer = [];
  controller.findOne(productId, (err, doc) => {
    if (err) {
      console.log('Database error: ', err);
    } else {
      // console.log('doc = ', doc);
      dataForServer.push(doc);
      let category = doc.category;
      controller.findFour(category, (err, docs) => {
        if (err) {
          console.log('findFour error: ', err);
        } else {
          // docs.forEach(object => {
          //   dataForServer.push(object);
          // });
          utilities.chooseRandomFour(docs, dataForServer);
          // console.log('dataForServer = ', dataForServer);
          res.send(dataForServer);
        }
      });
    }
  });
  // models.ProductModel.findOne({id: productId}, (err , doc) => {
  //   if (err) {
  //     console.log('Error: ', err);
  //   } else {
  //     res.send(doc);
  //   }
  // })
});

const port = process.env.PORT || 8003;

app.listen(port, () => {
  console.log('Server listening on port 8003');
});
