const express = require('express');
const app = express();
require("../src/db/conn");
const bodyParser = require('body-parser');
const router = require("../src/routers/routes")
const PORT = process.env.PORT || 3010;


app.use(bodyParser.json())
app.use(router);

app.listen(PORT, () => console.log(`Server is running in ${PORT}`))