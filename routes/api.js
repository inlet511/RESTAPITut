const express = require('express');
const router = express.Router();

//read
router.get('/nijias', (req, res, next) => {
    res.send({
        type: 'GET'
    });
});

//add new 
router.post('/nijias', (req, res, next) => {
    console.log(req.body);
    res.send({
        type: 'POST',
        name:req.body.name,
        rank:req.body.rank
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