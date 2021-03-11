const models = require('../models.js')
const bcrypt = require('bcrypt')

module.exports = (app) => { 
  
  app.post('/api/login', async (req, res) => {
    if (req.session.user) {
      res.json({ error: "Someone is already logged in" });
      return
    }
    
    let user = req.body
    let userExist = await models['users'].findOne({ email: user.email })
    if (!userExist) {
      res.send('Bad credentials')
      return
    }
    
    const match = await checkPassword(user.password, userExist.password)
    console.log(match);
    if (match) { 
      req.session.user = userExist;
      userExist.password = ''
      res.json(userExist); 
      return
    }
    res.json({ error: 'Bad credentials' })  
  })

  app.get("/api/login", (req, res) => {
    if (req.session.user) {
      let user = { ...req.session.user };
      delete user.password; // remove password in answer
      res.json(user);
    } else {
      res.json({ error: "Not logged in" }); 
    }
  });

  app.delete("/api/login", (req, res) => {
    if (req.session.user) {
      delete req.session.user;
      res.json({ success: "Logged out" });
    } else {
      res.json({ error: "Was not logged in" });
    }
  });

}

const checkPassword = async (password, passwordHash) => {
  const match = await bcrypt.compare(password, passwordHash)
  return match
}