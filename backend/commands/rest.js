const models = require("../models.js");

module.exports = (app) => {

  app.get('/rest/:model', async (req, res) => {
    let docs = ''
    try {
      docs = await models[req.params.model]
        .find().populate(['host', 'address']).exec()
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
      doc = await models[req.params.model].findById(req.params.id).populate(['host', 'address', 'accommodation', 'hosting', 'client']).exec()
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
      await doc.save()
    }
    catch (e) {
      res.send('Save failed')
      return
    }

    res.json(doc)
  })

  app.put('/rest/hostings/:id', async (req, res) => {
    let model = models['hostings']
    let hosting = await model.findById(req.params.id)
    
    if (req.body.galleries) {
      hosting.galleries = hosting.galleries.concat(req.body.galleries)
      delete req.body.galleries
    }
    if (req.body.amenities) {
      hosting.amenities = hosting.galleries.concat(req.body.amenities)
      delete req.body.amenities
    }

    Object.assign(hosting, req.body)
    try {
      await hosting.save()
    }
    catch(e) {
      console.log(e);
    }

    res.json(hosting)
  })
};
