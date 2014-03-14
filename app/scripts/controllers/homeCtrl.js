myAppControllers.controller('HomeCtrl', ['$scope', 'syncData', function($scope, syncData) {
    syncData('syncedValue').$bind($scope, 'syncedValue');
}]);