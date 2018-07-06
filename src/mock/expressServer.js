
var express = require('express')  
var apiServer = express()  
var bodyParser = require('body-parser')  
apiServer.use(bodyParser.urlencoded({ extended: true }))  
apiServer.use(bodyParser.json())  
var apiRouter = express.Router()  

var api = require('./api.js');

module.exports={
    init: function(){
        apiServer.use('/api', api);
        apiServer.use('/api', apiRouter);  
        apiServer.listen(3000, function (err) {  
        if (err) {  
            console.log(err)  
            return  
        }  
        console.log('Listening at http://localhost:' + 3000 + '\n')  
        })  
    }
}