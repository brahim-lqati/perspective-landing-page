const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const contactShema = new Shema({
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Contact", contactShema);