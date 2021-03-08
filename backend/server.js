const express = require("express");
const app = express();
const { nanoid } = require('nanoid')

app.use(express.json())

app.listen(3001)