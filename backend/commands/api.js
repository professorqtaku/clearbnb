const models = require('../models')
 
module.exports = (app) => {
  app.post('/api/bookings', async (req, res) => {
    const Booking = models['bookings']
    const Availability = models['availabilities']
    let booking = new Booking(req.body)
    
    if (
      req.body.hosting.guestAmount < booking.guestAmount ||
      booking.timePeriod[1] - booking.timePeriod[0] < 86400000
    ) {
      res.json({ error: "invalid input" });
      return;
    }


    
    let availabilities = await Availability.find({ hosting: (booking.hosting) }).exec();
    
    let isValid = checkAvailability(availabilities, booking.timePeriod)
    
    if (!isValid) {
      res.json({ error: "Booked time unavailable" });
      return
    }

    

      await booking.save()
        .then(() => res.json(booking))
        .catch(() => res.json({ error: "Save failed" }));
  })


}

const checkAvailability = (availabilities, periodToCheck) => {
  if (availabilities.length === 0) {
    return false
  }

  let isValid = false;
  for (let a of availabilities) {
    let startDate = a.timePeriod[0];
    let endDate = a.timePeriod[1];
    if (
      periodToCheck[0] >= startDate &&
      periodToCheck[1] <= endDate
    ) {
      isValid = true;
      break;
    }
  }

  return isValid
}
