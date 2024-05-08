const express = require("express");
const app = express();
require("dotenv").config()

app.listen(process.env.PORT, () => { console.log(`E-Commerce Shopping Server is running in the port ${process.env.PORT}`) });
