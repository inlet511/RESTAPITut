const express = require('express');
const router = express.Router();
const Nijia = require('../models/nijia');

//read
router.get('/nijias', (req, res, next) => {
    res.send({
        type: 'GET'
    });
});

//add new 
router.post('/nijias', (req, res, next) => {
    //instantiate an instance and save to database in one stop
    Nijia.create(req.body).then((nijia)=>{
        res.send(nijia);
    });
});

// update 
router.put('/nijias/:id', (req, res, next) => {
    res.send({
        type: 'PUT'
    });
});

//DELETE
router.delete('/nijias/:id', (req, res, next) => {
    res.send({
        type: 'DELETE'
    });
});

module.exports = router;