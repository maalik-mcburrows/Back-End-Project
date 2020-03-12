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
      is_logged_in: req.session.is_logged_in,
      first_name: req.session.first_name
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;

