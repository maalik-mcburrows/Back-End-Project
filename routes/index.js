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
      is_logged_in: req.session.is_logged_in,
      first_name: req.session.first_name
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.post('/', async function (req, res) {
  console.log(req.body);
  const {
      review_title,
      review_text,
      reviewer_name,
      mountain_id,
      climber_id
  } = req.body

  const postData = await MountainModel.addReviews(review_title,
      review_text,
      reviewer_name,
      mountain_id,
      climber_id
      );
  console.log(postData);

  res.status(200).redirect('/');
});

module.exports = router;

