const models = require("../models.js");

module.exports = (app) => {
  app.get('/rest/view/:model/:hostingId', async (req, res) => {
    if (req.params.model !== "bookings" && req.params.model !== "availabilities") {
      res.json({error: "Model unavailable"})
      return
    }
      const model = models[req.params.model];

    const hostingId = req.params.hostingId

    let docs = await model.find({hosting: hostingId})
    try {
      res.json(docs)
    } catch {
      res.json({ error: "Fetch failed" })
    }
  })

}