mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
  },
  price: String,
  weight: String,
  dimensions: String,
  color: String,
  category: String,
  image_url: String,
  overallReview: Number,
  reviewNumber: Number,
});

let ProductModel = mongoose.model('ProductModel', productSchema);

module.exports.ProductModel = ProductModel;
