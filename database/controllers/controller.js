const mongoose = require('mongoose');
const Product = require('../models/modelSchema');

mongoose.connect('mongodb://localhost/hackazon');

let findAll = (param, callback) => {
  Product.ProductModel.find({category: param}, callback);
}


module.exports.findAll = findAll;