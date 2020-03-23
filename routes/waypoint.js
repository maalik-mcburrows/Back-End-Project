const express = require('express');
const router = express.Router();
// const waypointModel = require('../models/waypoint');
// var multer = require('multer');
// var upload = multer({dest:'test'});
var ba64 = require("ba64")


router.get('/', async (req, res, next) => {
    
  
    res.render('template', { 
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


  router.post('/upload', function(req, res, next){
    const { myinput } = req.body;
    const {name} = req.body;
    console.log("encoded",myinput);
    const data_url = myinput
    ba64.writeImageSync(`public/images/${name}`, data_url);

  })


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