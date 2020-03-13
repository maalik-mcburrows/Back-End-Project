const express = require('express');
const router = express.Router();
const mountainModel = require('../models/mountains');


router.get('/', async (req, res, next) => {
    const data = await mountainModel.getAllMountains();
  
    res.render('template', { 
      locals: {
        title: 'This is the Home Page',
        data: data,
        is_logged_in: req.session.is_logged_in,
        first_name: req.session.first_name
      },
      partials: {
        partial: 'partial-mtn-list'
      }
    });
  });

router.get('/:id?', async (req, res) => {
    const {
        id
    } = req.params;
    const mountainName = await mountainModel.getMountainName(id);
    const mountainData = await mountainModel.getById(id);
    const getReviewDetails = await mountainModel.getReviewDetails(id);
    res.render('template', { 
        locals: {
            title: mountainName.name,
            mountainData: mountainData,
            getReviewDetails: getReviewDetails,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.is_logged_in,
            user_id: req.session.user_id,
            first_name: req.session.first_name
        },
        partials: {
            partial: 'partial-single'
        }
    })
});

router.get('/:id/custom-route', async function(req, res, next) {
  const {
    id
} = req.params;
const mountainData = await mountainModel.getById(id);
const mountainName = await mountainModel.getMountainName(id);
  res.render('template', { 
    locals: {
      title: mountainName.name,
      mountainData: mountainData,
      is_logged_in: req.session.is_logged_in,
      first_name: req.session.first_name
    },
    partials: {
      partial: 'partial-ctm-path'
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

  const postData = await mountainModel.addReviews(review_title,
      review_text,
      reviewer_name,
      mountain_id,
      climber_id
      );
  console.log(postData);

  res.status(200).redirect('/');
});


module.exports = router;
