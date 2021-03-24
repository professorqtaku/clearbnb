const models = require("../models");

module.exports = (app) => {
  app.delete("/api/hostings/:id", async (req, res) => {
    let Hosting = models["hostings"]
    let Booking = models["bookings"]
    let Availability = models["availabilities"]

    let hostingId = req.params.id;

    try {
      await Hosting.findByIdAndRemove(hostingId);
      await Booking.deleteMany({ hosting: hostingId })
      await Availability.deleteMany({ hosting: hostingId });
      res.json({ success: "Delete successful" });
      return;
    }
    catch(e) {
      res.json({ error: "Hosting not found" })
    }
  });
};

