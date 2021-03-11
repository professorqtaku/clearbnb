global.mongoose = require('mongoose')
const express = require("express");
const app = express();
const path = require('path')
const { nanoid } = require('nanoid')

app.use(express.json())

//app.use(express.static(path.join(__dirname, "public")));

const atlasUrl =
  "mongodb+srv://clearbnbAtlas:grupp5@cluster0.p9ure.mongodb.net/clearbnb?retryWrites=true&w=majority";

global.mongoose.connect(atlasUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const rest = require('./commands/rest')
rest(app)

app.listen(3001, () => {
  console.log("Server started ar port 3001");
});