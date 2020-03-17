const express = require('express');
const router = express.Router();
// const waypointModel = require('../models/waypoint');
const mountainModel = require('../models/mountains');


router.get('/:id?', async (req, res, next) => {
  const {
    id
  } = req.params;
  const mountainPic = await mountainModel.getMountainPic(id);
  const mountainData = await mountainModel.getById(id);
    res.render('waypoint-template', { 
      locals: {
        title: 'Create custom path',
        is_logged_in: req.session.is_logged_in,
        mountainData: mountainData,
        mountainPic: mountainPic.image,
        first_name: req.session.first_name
        
        
      },
      partials: {
        partial: 'partial-create-route'
      }
    });
  });


// router.post('/', async function (req, res) {
//   console.log(req.body);
//   const {
//       review_title,
//       review_text,
//       reviewer_name,
//       mountain_id,
//       climber_id
//   } = req.body

//   const postData = await mountainModel.addReviews(review_title,
//       review_text,
//       reviewer_name,
//       mountain_id,
//       climber_id
//       );
//   console.log(postData);

//   res.status(200).redirect('/');
// });


module.exports = router;