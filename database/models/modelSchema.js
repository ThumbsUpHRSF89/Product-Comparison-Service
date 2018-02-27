mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
  },
  price: String,
  weight: String,
  dimensions: String,
  color: String,
  category: String,
  image_url: String,
  overallReview: Number,
  reviewNumber: Number,
})

let ProductModel = mongoose.model('Product', productSchema);

module.exports.ProductModel = ProductModel;