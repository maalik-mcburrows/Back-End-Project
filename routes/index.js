var express = require('express');
var router = express.Router();
const MountainModel = require('../models/mountains');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const data = await MountainModel.getAllMountains();

  res.render('template', { 
    locals: {
      title: 'This is the Home Page',
      data: data,
      // is_logged_in: request.session.is_logged_in
      
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;

