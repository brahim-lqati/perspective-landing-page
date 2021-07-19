const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api",require('./routes/api/contact.routes'));

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}`);
})


