'use strict';

var Firebase = require('firebase');

exports.addSubject = function (req, res) {
    var myRootRef = new Firebase('https://thesis.firebaseio.com/subjects');
    myRootRef.push(req.body);
    res.send('thanks')
}