const models = require("../models.js");

module.exports = (app) => {

  app.get('/rest/:model', async (req, res) => {
    let docs = ''
    try {
      docs = await models[req.params.model]
        .find()
    }
    catch (e) {
      res.send('model not found')
      return
    }
    res.json(docs)
  })

  app.get('/rest/:model/:id', async (req, res) => {
    let doc = ''
    try {
      doc = await models[req.params.model].findById(req.params.id).populate(['host', 'address']).exec()
    }
    catch (e) {
      res.send('Not found')
      return
    }
    res.json(doc)
  })

  app.post('/rest/:model/', async (req, res) => {
    let model = models[req.params.model]
    let doc = new model(req.body)
    try {
      console.log("generic");
      await doc.save()
    }
    catch (e) {
      res.send('Save failed')
      return
    }

    res.json(doc)
  })

  app.post('/rest/:model/', async (req, res) => {
    let model = models[req.params.model]
    console.log(model);
    let doc = ''
    doc = new model(req.body)
    console.log(doc.populate);
    try {
      await doc.save()
    }
    catch (e) {
      res.send('Save failed')
      return
    }
    res.json(doc)
  })
};
