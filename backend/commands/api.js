const models = require('../models.js')
const bcrypt = require('bcrypt')



module.exports = (app) => {
  app.post('/api/users', async (req, res) => {
    let User = models['users']
    if (req.session.user) {
      res.json({ error: 'Someone is already logged in' })
      return
    }
    
    req.body = trimObject(req.body)
    if (!req.body.password.length) {
      res.send('Password is missing')
      return
    }

    if (req.body.password !== req.body.confirmPassword) {
      res.send('Password does not match')
      return
    }
    else delete req.body.confirmPassword
    console.log(req.body);

    let hashedPassword = await hashPassword(req.body.password)

    let user = new User({ ...req.body, password: hashedPassword })

    let userExist = await User.findOne({ email: user.email })
    if (userExist) {
      res.send('E-mail already used/is missing')
      return
    }
    await user.save()
      .then(() => res.json({ 'success': true }))
      .catch(() => res.send('Save failed'))
  })
}

const hashPassword = async (password) => {
  const saltRounds = 10;
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (e) {
    res.send({ error: "Hash failed" });
    return;
  }
}

const trimObject = (objectToTrim) => {
  for (let [key, value] of Object.entries(objectToTrim)) {
    if (value.length) objectToTrim[key] = value.trim();
  }
  return objectToTrim
}