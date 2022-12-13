const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        min: 10,
    },
    lastName: {
        type: String,
        require: true,
    },
})

const User = mongoose.model('users', userSchema);
module.exports = User;
