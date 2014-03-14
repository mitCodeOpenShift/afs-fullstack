'use strict';

/**
 * Get awesome things
 */

var Firebase = require('firebase');

exports.awesomeThings = function (req, res) {
    console.log('say hi');
    res.json([
        {
            name: 'HTML5 Boilerplate',
            info: 'HTML5.',
            awesomeness: 10
        },
        {
            name: 'AngularJS',
            info: 'AngularJS is a toolset for building the framework most suited to your application development.',
            awesomeness: 10
        }
    ]);
};

exports.stuff = function (req, res) {
   // console.log(req.body);
    var myRootRef = new Firebase('https://thesis.firebaseio.com/proba');
    myRootRef.set("hello world!");
    res.send('thanks');
};

exports.addSubject = function(req, res) {
    var myRootRef = new Firebase('https://thesis.firebaseio.com/subjects');

    myRootRef.push(req.body);
    res.send('thanks');
}