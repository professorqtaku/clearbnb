const models = require("../models.js");

module.exports = (app) => {

  app.get('/rest/:model', async (req, res) => {
    let model = models[req.params.model]
    console.log(model);
    res.send('model found')
  })

};
