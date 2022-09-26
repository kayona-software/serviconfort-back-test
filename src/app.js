const express = require('express');
const {users,customers} = require('./v1/routes');
require('dotenv').config();

const app = express();
var cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 8000;


app.use("/api/v1/users", users);
app.use("/api/v1/customers", customers);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});