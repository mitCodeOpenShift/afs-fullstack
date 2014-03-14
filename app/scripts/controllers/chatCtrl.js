myAppControllers.controller('ChatCtrl', ['$scope', 'syncData', '$rootScope', '$http',
    function ($scope, syncData, $rootScope, $http) {

        console.log($rootScope.auth);

        $http.get('/api/awesomeThings').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });


        var ob = new Object();
        ob.name = 'hello';
        ob.value = 'world';

        $http.post('/api/stuff', ob).success(function (stuff) {
            console.log(stuff);
        });

        /*
         $rootScope.auth.$sendPasswordResetEmail('mail@mitcode.com', function (error, success) {
         console.log("df");
         if (!error) {
         console.log('Password reset email sent successfully');
         } else {
         console.log('gre');
         }
         });
         */

    }]);