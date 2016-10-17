
'use strict';


var express = require('express');
var moment = require('moment');
var router = express.Router();

var dataArray = [];

for(var i=0; i<5; i++){
    dataArray.push({
        timestamp:new Date().getTime() - 600000*i,
        temperature:23
    });
}

router.get('/ping', function(req, res) {

    res.send("All good. You don't need to be authenticated to call this");

	console.log("Ping called");
});

router.get('/data', function(req, res) {
    
    var fromTs = req.query.from;
    var toTs = req.query.to;

    var retVal = [];

    for(var i=0; i<dataArray.length; i++){
        var record = dataArray[i];
        if(fromTs && record.timestamp<fromTs){
            continue;
        }
        if(toTs && record.timestamp>toTs){
            continue;
        }
        retVal.push(record);
     }

    res.status(200).json(retVal);
});

router.post('/data', function(req, res) {
    var body = req.body;
    
    dataArray.push(body);

    res.status(200).json(body);
});

router.delete('/data', function(req, res) {
    var ts = parseInt(req.query.timestamp);
    var selectedIndex = -1;
    for(var i=0; i<dataArray.length; i++){
        var record = dataArray[i];
        console.log(record.timestamp);
        console.log(ts);
        if(record.timestamp===ts){
            selectedIndex=i;
            break;
        }
    }
    if(selectedIndex!==-1){
 		dataArray.splice(selectedIndex,1);
        res.status(200).json(ts);
    }else{
        res.status(404).json(ts);
    }

});
module.exports = router