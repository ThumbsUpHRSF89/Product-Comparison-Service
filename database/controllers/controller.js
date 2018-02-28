const mongoose = require('mongoose');
const models = require('../models/modelSchema');

mongoose.connect('mongodb://localhost/hackazon');

// let findOne = (number, callback) => {
//   console.log('trying to find now');
//   console.log('number = ', number)
//   // console.log(models.ProductModels);
//   return models.ProductModel.findOne({id: number}, callback);
// }

let findOne = (number, callback) => {
  console.log('trying to find now');
  console.log('number = ', number)
  // console.log(models.ProductModels);
  return models.ProductModel.findOne({id: number}).exec(callback);
}

let findAll = (param, callback) => {
  return models.ProductModel.find({category: param}.limit(4).exec(callback));
}


module.exports.findOne = findOne;
module.exports.findAll = findAll;