myAppControllers.controller('adminStudentsCtrl', ['$scope', 'syncData', '$http',
    function($scope, syncData, $http) {
    
    /****************************************************************************************/
    $scope.students = syncData('students');

    $scope.addStudent = function() {
        console.log($scope.newStudent);
        if ($scope.newStudent !== null) {
            $scope.students.$add(
                {
                    name: $scope.newStudent.name,
                    midname: $scope.newStudent.midname,
                    surname: $scope.newStudent.surname,
                    studentNumber: $scope.newStudent.studentNumber,
                    sex: $scope.newStudent.sex,
                    egn: $scope.newStudent.egn,
                    city: $scope.newStudent.city,
                    address: $scope.newStudent.address,
                    mobile: $scope.newStudent.mobile,
                    parent: $scope.newStudent.parent
                }
            );


            //    $scope.subjects[$scope.newSubject.code] = {caption: $scope.newSubject.caption};
//            $scope.subjects.$save();
            $scope.newStudent = null;
        }
    }

    /****************************************************************************************/

}]);
