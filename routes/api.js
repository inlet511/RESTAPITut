const express = require('express');
const router = express.Router();
const Nijia = require('../models/nijia');

//read
router.get('/nijias', (req, res, next) => {
    Nijia.aggregate().near({
        near: { "type": "Point", "coordinates": [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist"
    }).then((nijias) => {
        res.send(nijias);
    });
});

//add new 
router.post('/nijias', (req, res, next) => {
    //instantiate an instance and save to database in one step
    Nijia.create(req.body).then((nijia) => {
        res.send(nijia);
    }).catch(next);
});

// update 
router.put('/nijias/:id', (req, res, next) => {
    Nijia.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Nijia.findOne({ _id: req.params.id }).then((nijia) => {
            res.send(nijia);
        });
    });
});

//DELETE
router.delete('/nijias/:id', (req, res, next) => {
    Nijia.findByIdAndRemove({ _id: req.params.id }).then((nijia) => {
        res.send(nijia);
    });
});

module.exports = router;