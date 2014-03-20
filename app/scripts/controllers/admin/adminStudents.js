myAppControllers.controller('adminStudentsCtrl', ['$scope', 'syncData', '$http',
    function ($scope, syncData, $http) {

        $scope.students = syncData('app/students', 0);
        $scope.p_students = syncData('pending/students', 0);

        $scope.maxSize = 4;
        $scope.curStudent = null;
        $scope.bigTotalItems = null;

 /*       $scope.students.$on("loaded", function (snapshot) {
            console.log(Object.keys(snapshot).length);
            $scope.bigTotalItems = Object.keys(snapshot).length;
        });
        */

        $scope.students.$on("value", function (snapshot) {

            $scope.bigTotalItems = $scope.students.$getIndex().length;
        });


        $scope.bigCurrentPage = 1;

        $scope.curStudentNav = function (key) {
            $scope.curStudentKey = key;
            $scope.curStudent = $scope.students.$child(key);
        };

        /****************************************************************************************/


        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.hello = function (key) {
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