const express = require('express'),
  router = express.Router(),
  MountainModel = require('../models/mountains');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const data = await MountainModel.getAllMountains();
  res.json(data);
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

