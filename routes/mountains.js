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
    const {id} = req.params;

    const mountainName = await mountainModel.getMountainName(id);
    const mountainData = await mountainModel.getMountainById(id);

    res.render('template', {
        locals: {
            title: mountainName.name,
<<<<<<< HEAD
            mountainData: mountainData
            // is_logged_in: req.session.is_logged_in,
            // user_id: req.session.is_logged_in,
            // user_id: req.session.user_id,
            // first_name: req.session.first_name
=======
            mountainData: mountainData,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.is_logged_in,
            user_id: req.session.user_id,
            first_name: req.session.first_name
>>>>>>> 1402e9887432065d5e6232a265264d9e72d173ed
        },
        partials: {
            partial: 'partial-single'
        }
    })
});

module.exports = router;
