const models = require('../models.js')
const bcrypt = require('bcrypt')

module.exports = (app) => {
  app.post('/api/users', async (req, res) => {
    let User = models['users']
    if (req.session.user) {
      res.json({ error: 'Someone is already logged in' })
      return
    }

    const saltRounds = 10
    let hashedPassword = ''
    try {
      hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    } catch (e) {
      res.send('Password is missing')
    }
    let user = new User({ ...req.body, password: hashedPassword })

    let userExist = await User.findOne({ email: user.email })
    if (userExist) {
      res.send('E-mail already used/is missing')
      return
    }
    try {
      await user.save()
      res.json({ success: true })
    }
    catch (e) {
      res.send('Save failed')
      return
    }
  })

}

const hashPassword = async (password) => {
  const saltRounds = 10;
  const myPlaintextPassword = "s0//P4$$w0rD";
  const someOtherPlaintextPassword = "not_bacon";
  let hashed = "";
  await bcrypt.genSalt(saltRounds, async (err, salt) => {
    await bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
      console.log("hash", hash);
      hashed = hash;
    });
  });
}