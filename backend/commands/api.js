const models = require('../models')
 
module.exports = (app) => {
  app.post('/api/bookings', async (req, res) => {
    const Booking = models['bookings']
    let booking = new Booking(req.body)

    
    if (req.body.hosting.guestAmount >= booking.guestAmount) {
      await booking.save()
        .then(() => res.json(booking))
        .catch(() => res.json({ error: "Save failed" }))
    } else {
      res.json({error: "invalid input"})
    }
  })
}