var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    // console.log('inside the get route')
    console.log(req, res)
    res.render('form')
});

module.exports = router;