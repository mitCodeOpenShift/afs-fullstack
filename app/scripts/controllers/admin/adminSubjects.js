myAppControllers.controller('adminSubjectsCtrl', ['$scope', 'syncData', '$http',
    function($scope, syncData, $http) {

    /****************************************************************************************/
    $scope.newSubject = null;

    // constrain number of messages by limit into syncData
    // add the array into $scope.messages
    $scope.subjects = syncData('subjects', 10);

    // add new messages to the list
    $scope.addSubject = function() {
        console.log($scope.newSubject);
        if ($scope.newSubject !== null) {
/*            $scope.subjects.$add({code: $scope.newSubject.code, caption: $scope.newSubject.caption});
            //    $scope.subjects[$scope.newSubject.code] = {caption: $scope.newSubject.caption};
//            $scope.subjects.$save();

*/
            $http.post('/api/addSubject', $scope.newSubject).success(function(newSub){
                console.log(newSub);
            })
            $scope.newSubject = null;
        }
    };

    $scope.saveSubjects = function() {
        $scope.subjects.$save();
        $scope.subjectsEditable = false;
        console.log($scope.subjectsEditable);
    }

    $scope.deleteSubject = function($index) {
        $scope.subjects.$child($index).$remove();
        //$scope.subjects.$remove();
    }

    /****************************************************************************************/

}]);
