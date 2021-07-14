const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const contactShema = new Shema({
    email: {
        type: email,
        required: true
    },
    object: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Contact", contactShema);