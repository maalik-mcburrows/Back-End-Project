const express = require('express'),
  router = express.Router(),
  MountainModel = require('../models/mountains');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const data = await MountainModel.getAllMountains();

  res.render('template', { 
    locals: {
      title: 'This is the Home Page',
<<<<<<< HEAD
      data: data
      // is_logged_in: req.session.is_logged_in 
=======
      data: data,
      is_logged_in: req.session.is_logged_in,
      first_name: req.session.first_name
>>>>>>> 1402e9887432065d5e6232a265264d9e72d173ed
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;

