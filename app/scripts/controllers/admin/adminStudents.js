myAppControllers.controller('adminStudentsCtrl', ['$scope', 'syncData', '$http',
    function ($scope, syncData, $http) {

        $scope.curStudentKey = null;
        $scope.curStudent = null;

        $scope.curStudentNav = function (key) {
            $scope.curStudentKey = key;
            $scope.curStudent = $scope.students.$child(key);
            console.log(key);
        };

        /****************************************************************************************/

        $scope.students = syncData('app/students', 0);
        $scope.p_students = syncData('pending/students', 0);

        $scope.maxSize = 5;
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.bigTotalItems = 17;
        $scope.bigCurrentPage = 1;

        $scope.hello = function(key) {
            return $scope.students.$child(key);
        }

        $scope.addStudent = function () {
            console.log($scope.newStudent);
            if ($scope.newStudent !== null) {
                $scope.p_students.$add(
                    {
                        fname: $scope.newStudent.fname,
                        midname: $scope.newStudent.midname,
                        surname: $scope.newStudent.surname,
                        email: $scope.newStudent.email,
                        studentNumber: $scope.newStudent.studentNumber,
                        sex: $scope.newStudent.sex,
                        egn: $scope.newStudent.egn,
                        city: $scope.newStudent.city,
                        address: $scope.newStudent.address,
                        mobile: $scope.newStudent.mobile,
                        //  parent: $scope.newStudent.parent
                    }
                );


                //    $scope.subjects[$scope.newSubject.code] = {caption: $scope.newSubject.caption};
//            $scope.subjects.$save();
                $scope.newStudent = null;
            }
        }
        /****************************************************************************************/

    }]);


myAppControllers.filter('myFilter', function() {
    return function(input, par1) {
        return input.slice((par1-1)*5, par1*5);
    };
});