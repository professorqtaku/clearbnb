const models = require("../models.js");

module.exports = (app) => {

  app.get('/rest/:model', async (req, res) => {
    let docs = ''
    try {
      docs = await models[req.params.model].find()
    }
    catch(e) {
      res.send('model not found')
      return
    }
    res.json(docs)
  })

};
