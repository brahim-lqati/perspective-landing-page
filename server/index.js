const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api",require('./routes/api/contact.routes'));

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}`);
})


