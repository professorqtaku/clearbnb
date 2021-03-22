const models = require('../models.js')
const bcrypt = require('bcrypt')

const salt = "Truffle5@lt";

module.exports = (app) => {
  app.post('/api/users', async (req, res) => {
    let User = models['users']
    if (req.session.user) {
      res.json({ error: 'Someone is already logged in' })
      return
    }
    
    req.body = trimObject(req.body)
    if (!req.body.password.length) {
      res.json({ error: 'Password is missing'})
      return
    }

    if (req.body.password !== req.body.confirmPassword) {
      res.json({ error: 'Password does not match'})
      return
    }
    else delete req.body.confirmPassword

    let hashedPassword = await hashPassword(req.body.password + salt)

    let user = new User({ ...req.body, password: hashedPassword })

    let userExist = await User.findOne({ email: user.email })
    if (userExist) {
      res.json( {error: "E-mail already used/is missing"});
      return
    }
    await user.save()
    .then(() => {
      req.session.user = user
      res.json({ success: true })
    })
      .catch(() => res.send('Save failed'))
  })
  app.post('/api/login', async (req, res) => {
    if (req.session.user) {
      res.json({ error: "Someone is already logged in" });
      return
    }
    
    let user = req.body
    let userExist = await models['users'].findOne({ email: user.email })
    if (!userExist) {
      res.json({ error: 'Bad credentials' })
      return
    }
    
    const match = await checkPassword(user.password+salt, userExist.password)
    if (match) { 
      req.session.user = userExist;
      res.json({ success: "Logged in" });
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
const checkPassword = async (password, passwordHash) => {
  const match = await bcrypt.compare(password, passwordHash)
  return match
}