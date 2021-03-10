const models = require('../models.js')

module.exports = (app) => {
  app.post('/api/users', async (req, res) => {
    const User = models['users']
    if (req.session.user) {
      res.json({ error: 'Someone is already logged in' })
      return
    }
    let user = new User(req.body)

    let userInColl = await User.findOne({ email: user.email })
    if (userInColl) {
      res.send('E-mail already used/is missing')
      return
    }
    try {
      user.save()
    }
    catch (e) {
      res.send('Save failed')
      return
    }

    //req.session("user", user)
    res.send(user)
  })

}