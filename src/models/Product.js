const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  varient: {
    type: Number,
    default: 1
  },
  image: {
    type: String,
    required: true
  }
  

  
})

module.exports = mongoose.model('Product', productSchema)