const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
})

const Product = mongoose.model('products', productSchema);
module.exports = Product;
