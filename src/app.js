require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const ORIGIN = process.env.ORIGIN || '*';
const {users,customers,dni,cities} = require('./v1/routes');
const logger = require('./v1/utils/logger');
const dns = require('dns');

var corsOptions = {
  origin: ORIGIN,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use("/api/v1/users", users);
app.use("/api/v1/customers", customers);
app.use("/api/v1/dni", dni);
app.use("/api/v1/cities", cities);

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: '+add);
})

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});