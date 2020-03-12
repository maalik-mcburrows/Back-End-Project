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
    const mountainName = await mountainModel.getMountainName(id)
    const mountainData = await mountainModel.getById(id);
    res.render('template', {
        locals: {
            title: mountainName.name,
            mountainData: mountainData,
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

module.exports = router;
