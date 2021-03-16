const models = require('../models')
 
module.exports = (app) => {
  app.post('/api/bookings', async (req, res) => {
    const Booking = models['bookings']
    const Availability = models['availabilities']
    let booking = new Booking(req.body)



    
    if (req.body.hosting.guestAmount < booking.guestAmount) {
      res.json({error: "invalid input"})
      return
    }
    
     let availabilities = await Availability.find({ hosting: (booking.hosting)}).exec();
     if(availabilities.length === 0){
     res.json({error: "hosting unavailable"})
     return
     }
    

    await booking.save()
        .then(() => res.json(booking))
        .catch(() => res.json({ error: "Save failed" }))
  })
}