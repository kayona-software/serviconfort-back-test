const express = require('express');
const {users,customers,dni,cities} = require('./v1/routes');
require('dotenv').config();
var cors = require('cors');
var cors = require('cors');

const app = express();
app.use(cors());

var corsOptions = {
  origin: 'https://netlify.app',
  optionsSuccessStatus: 200
}


const PORT = process.env.PORT || 8000;

app.use("/api/v1/users", cors(corsOptions), users);
app.use("/api/v1/customers",cors(corsOptions), customers);
app.use("/api/v1/dni", cors(corsOptions),dni);
app.use("/api/v1/cities", cors(corsOptions),cities);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});