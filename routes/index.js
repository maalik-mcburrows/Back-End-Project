const express = require('express'),
  router = express.Router(),
  MountainModel = require('../models/mountains');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const data = await MountainModel.getAllMountains();

  res.render('template', { 
    locals: {
      title: 'This is the Home Page',
      data: data,
<<<<<<< HEAD
      is_logged_in: req.session.is_logged_in
=======
      // is_logged_in: request.session.is_logged_in
>>>>>>> 2b03f15f56e7658a3830555e6aa57342d18b78ef
      
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;

