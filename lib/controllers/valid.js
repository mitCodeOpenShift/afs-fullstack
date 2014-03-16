var Firebase = require('firebase');

var usersRef = new Firebase('https://thesis.firebaseio.com/pending/subjects');
usersRef.on('child_added', function(snapshot) {

    var myRootRef = new Firebase('https://thesis.firebaseio.com/app/subjects');
    myRootRef.push(snapshot.val());
    console.log(snapshot.val());
    console.log('thanks');
	
	setTimeout(function() {
		usersRef.child(snapshot.name()).remove();
	}, 3000);

    /*    var userName = snapshot.name(), userData = snapshot.val();
     alert('User ' + userName + ' has entered the chat');
     */
});

var usersRef = new Firebase('https://thesis.firebaseio.com/pending/students');
usersRef.on('child_added', function(snapshot) {

    var myRootRef = new Firebase('https://thesis.firebaseio.com/app/students');
    myRootRef.push(snapshot.val());
    console.log(snapshot.val());
    console.log('thanks');

    setTimeout(function() {
        usersRef.child(snapshot.name()).remove();
    }, 3000);

    /*    var userName = snapshot.name(), userData = snapshot.val();
     alert('User ' + userName + ' has entered the chat');
     */
});