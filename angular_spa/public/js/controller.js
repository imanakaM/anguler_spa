app.controller('TopController', [ '$scope','$state', function($scope, $state) {

    $scope.next       = function(event) {
        event.preventDefault();

        $state.go('page2');
    };

}]);

app.controller('Page2Controller', [ '$scope','$state', function($scope, $state) {

    $scope.next       = function(event) {
        event.preventDefault();

        $state.go('page1');
    };

}]);