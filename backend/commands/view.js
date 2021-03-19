const { accommodations, hostings } = require("../models.js");
const models = require("../models.js");

module.exports = (app) => {
  app.get('/view/availabilities/:hostingId', async (req, res) => {
    const Availability = models['availabilities']

    const hostingId = req.params.hostingId

    let availabilities = await Availability.find({hosting: hostingId})

    try {
      res.json(availabilities)
    } catch {
      res.json({ error: "Fetch failed" })
    }
    
  })


}