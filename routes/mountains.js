const express = require('express');
const router = express.Router();
const mountainModel = require('../models/mountains');


router.get('/', async (req, res, next) => {
    const data = await mountainModel.getAllMountains();
  
    res.render('template', { 
      locals: {
        title: 'Mountain Archive',
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
<<<<<<< HEAD
    const mountainData = await mountainModel.getById(id);
=======
    const mountainName = await mountainModel.getMountainName(id);
    const mountainData = await mountainModel.getMountainById(id);
>>>>>>> f1dc5f4d4b747c66d8698b02c2242d67aba0d1f6
    const getReviewDetails = await mountainModel.getReviewDetails(id);
    // const getKarma = await mountainModel.getKarma(id);
    res.render('template', { 
        locals: {
            mountainData: mountainData,
            title: mountainData[0].name,
            getReviewDetails: getReviewDetails,
            // getKarma: getKarma,
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

router.get('/:id/review/:id?', async (req, res) => {
  const {
      id
  } = req.params;
  const mountainData = await mountainModel.getMountainByReview(id);
  const getSingleReview = await mountainModel.getSingleReview(id);
  // const getKarma = await mountainModel.getKarma(id);
  res.render('template', { 
      locals: {
          mountainData: mountainData,
          title: mountainData[0].name,
          getSingleReview: getSingleReview,
          // getKarma: getKarma,
          is_logged_in: req.session.is_logged_in,
          user_id: req.session.is_logged_in,
          user_id: req.session.user_id,
          first_name: req.session.first_name
      },
      partials: {
          partial: 'partial-review'
      }
  })
});

// router.get('/:id/custom-route', async function(req, res, next) {
//   const {
//     id
// } = req.params;
// const mountainData = await mountainModel.getById(id);
// const mountainName = await mountainModel.getMountainName(id);
//   res.render('template', { 
//     locals: {
//       title: mountainName.name,
//       mountainData: mountainData,
//       is_logged_in: req.session.is_logged_in,
//       first_name: req.session.first_name
//     },
//     partials: {
//       partial: 'partial-ctm-path'
//     }
//   });
// });

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

router.put('/karma/:id', async function (req, res) {
  console.log(req.body);
  const karmaData = await mountainModel.addReviewKarma(re_karma, id
      );
  console.log(karmaData);
  karmaData.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    karmaData.findOne({_id: req.params.id}).then(function(re_karma){
      res.send(re_karma);
    })
  });
  res.send(200);
});



module.exports = router;
