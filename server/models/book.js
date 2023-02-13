let mongoose = require('mongoose');

// create the books model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
}, {
    collection: "books"
});

// export the module
module.exports = mongoose.model('Book', bookModel);