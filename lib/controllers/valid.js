var Firebase = require('firebase');

var appStudents;
var appStudentsRef = new Firebase("https://thesis.firebaseio.com/app/students");
/*appStudentsRef.on('value', function(dataSnapshot) {
 appStudents = dataSnapshot.val();
 console.log(appStudents);
 });
 */


var usersRef = new Firebase('https://thesis.firebaseio.com/pending/students');
usersRef.on('child_added', function (snapshot) {

    var myRootRef = new Firebase('https://thesis.firebaseio.com/app/students');
    if (snapshot.hasChild('appId')) {

        var appId = snapshot.child('appId').val();


        myRootRef.child(appId).once('value', function (snap) {
            if (snap.val() !== null) {
                myRootRef.child(appId).set(snapshot.child('student').val());
            } else {
                console.log('g but no');
            }

        });

        console.log('thanks');

        setTimeout(function () {
            usersRef.child(snapshot.name()).remove();
        }, 3000);

    }
});