const express = require('express');
bcrypt = require('bcryptjs');
const ClimberModel = require('../models/climber'); 
const router = express.Router();


/* GET users listing. */

router.get('/signup', function(req, res, next) {
  

  res.render('template', { 
    locals: {
      title: 'Sign Up',
      is_logged_in: req.session.is_logged_in,
      first_name: req.session.first_name
    },
    partials: {
      partial: 'partial-signup'
    }
  });
});

router.get('/login', function(req, res, next) {
  

  res.render('template', { 
    locals: {
      title: 'Login',
      is_logged_in: req.session.is_logged_in,
      first_name: req.session.first_name
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
    req.session.first_name = loginResponse.first_name;
    req.session.last_name = loginResponse.last_name;
    res.redirect('/');

  } else {
    res.sendStatus(403);
  }
});

router.post('/signup', function(req, res, next){
  const { first_name, last_name, password, email } = req.body;
  
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const climber = new ClimberModel (null, first_name, last_name, email, hash);
  climber.addClimber();
  res.redirect("/");
  
});

router.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
