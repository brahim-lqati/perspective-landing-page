const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api",require('./routes/api/contact.routes'));

const __direname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__direname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html'),
    );
  });
}

app.listen(process.env.PORT || 5000, () => {
    console.log(`server running in port ${process.env.PORT}`);
})


