const express = require('express');
const path = require('path');
const app = express();
const controller = require('../database/controllers/controller.js')
const models = require('../database/models/modelSchema.js')


app.use(express.static(path.join(__dirname, '/../client/dist')))

// app.get('/:Id', (req, res) => {
//   console.log('Id = ', req.params.Id)
//   let productId = req.params.Id
//   res.send(productId)
// });

app.use('/:Id', (req, res) => {
  console.log('req.params.Id = ', req.params.Id);
  let productId = parseInt(req.params.Id)
  let dataForServer = [];
  controller.findOne(productId, (err, doc) => {
    if (err) {
      console.log('Database error: ', err);
    } else {
      console.log('Doc = ', doc)
      dataForServer.push(doc);
      let category = doc.category;
      console.log('category = ', category);
      res.send(category);
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

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log('Server listening on port 8000');
});