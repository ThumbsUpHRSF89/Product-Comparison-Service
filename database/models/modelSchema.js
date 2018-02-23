const Product = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: string,
    unique: true,
  },
  price: Number,
  weight: Number,
  manufacturer: String,
  dimensions: String,
  color: String,
  category: String,
  image_url: String,
  overallReview: Number,
  reviewNumber: Number,
  numberOfRatings: Number,
  reviews: [],
})