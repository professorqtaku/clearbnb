const models = require("../models.js");

module.exports = (app) => {

  app.get('/rest/:model', async (req, res) => {
    if (req.params.model === "users") {
      res.json({ error: "Fetch unavailable" });
      return
    }
    let docs = ''
    try {
      if (req.params.model === "availabilities") {
        docs = await models[req.params.model].find()
      } else {
        docs = await models[req.params.model]
          .find().populate(['host', 'address', 'hosting', 'client']).exec()
      }
    }
    catch (e) {
      res.json({ error: "model not found" })
      return
    }
    res.json(docs)
  })

  app.get('/rest/:model/:id', async (req, res) => {
    if (req.params.model === "users") {
      res.json({ error: "Fetch unavailable" });
    }
    let doc = ''
    try {
      doc = await models[req.params.model].findById(req.params.id).populate(['host', 'address', 'accommodation', 'hosting', 'client']).exec()
    }
    catch (e) {
      return
    }
    res.json(doc)
  })

  app.post('/rest/hostings/', async (req, res) => {
    let Hosting = models['hostings']
    let Address = models['addresses']
    let Availability = models['availabilities']

    if (req.body.guestAmount < 1) {
      res.json({ error: "Cannot have less thatn 1 guest in a hosting" });
      return
    }

    let address = new Address(req.body.address)
    let hosting = new Hosting(req.body);
    hosting.address = address

    if (req.body.availabilities.length) {
      req.body.availabilities[0].hosting = hosting
      let availability = new Availability(req.body.availabilities[0])
      availability.timePeriod = changeDate(availability.timePeriod[0], availability.timePeriod[1])
      await availability.save()
        .catch((e) => {})
      delete req.body.availabilities
    }

    try {
      await address.save()
      await hosting.save()
      res.json(hosting)
      return
    }
    catch (e) {
      res.json({ error: 'Save failed' });
      return
    }
  })

  app.post('/rest/:model/', async (req, res) => {
    if (req.params.model === "bookings" || req.params.model === "users") {
      res.json({ error: "Post unavailable" });
      return;
    }
    let model = models[req.params.model]
    let doc = new model(req.body)
    try {
      await doc.save()
    }
    catch (e) {
      res.json({ error: "Save failed" });
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
      res.json(hosting)
    }
    catch (e) {
      res.json({ error: "Save failed" })
    }

  })
};

const changeDate = (startDate, endDate) => {
  startDate = new Date(startDate)
  startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
  endDate = new Date(endDate)
  endDate.setDate(endDate.getDate() + 1);
  endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())

  return [startDate, endDate - 1]
}
