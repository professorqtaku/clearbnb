const { response } = require('express')
const { Model } = require('mongoose')
const { bookings } = require('../models')
const models = require('../models')

module.exports = (app) => {
  app.post('/api/bookings', async (req, res) => {
    const Booking = models['bookings']
    let booking = new Booking(req.body)
    try {
      booking.save()

    } catch (error) {
      res.send('saving failed :(')
      return
    }

    res.json(booking)
  })
}