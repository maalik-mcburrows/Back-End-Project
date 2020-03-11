const express = require('express');
bcrypt = require('bcryptjs');
const ClimberModel = require('../models/climbers'); 
const router = express.Router();


/* GET users listing. */

router.get('/signup', function(req, res, next) {
  

  response.render('template', { 
    locals: {
      title: 'Sign Up',
      is_logged_in: false
      
    },
    partials: {
      partial: 'partial-signup'
    }
  });
});

router.get('/login', function(req, res, next) {
  

  response.render('template', { 
    locals: {
      title: 'Login',
      is_logged_in: false
      
    },
    partials: {
      partial: 'partial-login'
    }
  });
});

router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;
  
  const climber = new ClimberModel(null, null, null, email, password);
  const loginResponse = await climber.loginClimber();
  console.log('login response is', loginResponse);

  if (!!loginResponse.isValid) {
    req.session.is_logged_in = loginResponse.isValid;
    req.session.climber_id = loginResponse.climber_id;
    req.session.name = loginResponse.name;
    res.redirect('/');

  } else {
    res.sendStatus(403);
  }
});

router.post('/signup', function(req, res, next){
  const { name, password, email } = req.body;
  
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const climber = new ClimberModel (null, name, email, hash);
  climber.addClimber();
  res.redirect('/');
  
});

router.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
