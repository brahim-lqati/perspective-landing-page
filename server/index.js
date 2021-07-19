const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api",require('./routes/api/contact.routes'));

app.listen(process.env.PORT || 5000, () => {
    console.log(`server running in port ${process.env.PORT}`);
})


