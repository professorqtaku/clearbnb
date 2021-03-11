const models = require('../models.js')
const bcrypt = require('bcrypt')

module.exports = (app) => {
  
  app.post('/api/login', async (req, res) => { 
    if (req.session.user) {
      res.json({ error: "Someone is already logged in" });
      return
    }
    let user = req.body
    console.log(user);
    const userExist = await models['users'].findOne({ email: user.email })
    if (!userExist) {
      res.send('Bad credentials')
      return
    }
    const match = await checkUser(user.password, userExist.password)
    if (match) {
      //req.session.user = userExist;
      res.json({ success: "Logged in" });
    }
    res.send('Bac credentials')
  })
}

const checkUser = async (password, passwordHash) => {
  const match = await bcrypt.compare(password, passwordHash)
  return match
}