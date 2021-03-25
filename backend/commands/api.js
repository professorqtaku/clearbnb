const models = require('../models')
 
module.exports = (app) => {
  app.delete("/api/hostings/:id", async (req, res) => {
    let Hosting = models["hostings"]
    let Booking = models["bookings"]
    let Availability = models["availabilities"]

    let hostingId = req.params.id;

    try {
      let hosting = await Hosting.findByIdAndRemove(hostingId);
      if (hosting) { 
        await Booking.deleteMany({ hosting: hostingId })
        await Availability.deleteMany({ hosting: hostingId });
        res.json({ success: "Delete successful" });
        return;
      }
      res.json({ error: "Hosting not found" })
    }
    catch(e) {
      res.json({ error: "Delete failed" })
    }
  })

  
  app.post('/api/bookings', async (req, res) => {
    const Booking = models['bookings']
    const Availability = models['availabilities']
    let booking = new Booking(req.body)

    booking.timePeriod = changeTimeStamp(booking.timePeriod[0], booking.timePeriod[1])
    
    if (
      req.body.hosting.guestAmount < booking.guestAmount ||
      booking.timePeriod[1] - booking.timePeriod[0] < 86400000
    ) {
      res.json({ error: "Invalid input" });
      return;
    }

    let availabilities = await Availability.find({ hosting: (booking.hosting) }).exec();
    let bookings = await Booking.find({ hosting: booking.hosting }).exec();
    
    let isValid = checkAvailability(
      availabilities,
      bookings,
      booking.timePeriod[0],
      booking.timePeriod[1]
    );
    
    if (!isValid) {
      res.json({ error: "Booked time unavailable" });
      return
    }

    await booking.save()
      .then(() => res.json(booking))
      .catch(() => res.json({ error: "Save failed" }));
  })


}

const checkAvailability = (availabilities, bookings, startDate, endDate) => {
  if (availabilities.length === 0) {
    return false
  }
  let isValid = false;
  for (let availability of availabilities) {
    let availablityStartDate = availability.timePeriod[0];
    let avalabilityEndDate = availability.timePeriod[1];
    if (startDate >= availablityStartDate && endDate <= avalabilityEndDate) {
      isValid = true;
      break;
    }
  }
  if (isValid && bookings.length) {
    isValid = false;
    for (let booking of bookings) {
      let bookingStartDate = booking.timePeriod[0];
      let bookingEndDate = booking.timePeriod[1]
      if (
        (startDate < bookingStartDate &&
        endDate < bookingStartDate) ||
        (startDate > bookingEndDate &&
        endDate > bookingEndDate)
      ) {
        isValid = true
        break
      }
    }
  }
  return isValid
}

const changeTimeStamp = (startDate, endDate) => {
  startDate = new Date(startDate);
  startDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  endDate = new Date(endDate);
  endDate.setDate(endDate.getDate() + 1);
  endDate = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );
  return [startDate, endDate - 1];
}
