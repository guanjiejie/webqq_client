var express = require('express');
var router = express.Router();

var jsonData = require('./data.js');

for(let i = 0; i < jsonData.length;i++){
    router.use(jsonData[i].url, function(req, res){
        res.json(jsonData[i].data);
    })
}

module.exports = router;