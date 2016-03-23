app.controller('TopController', [ '$scope','$state', function($scope, $state) {

    $scope.next       = function(event) {
        event.preventDefault();

        $state.go('input');
    };

}]);

app.controller('InputController',
    [ '$scope','$state','FormDataSharedService',
    function($scope, $state, FormDataSharedService) {

    this.formData = FormDataSharedService.formData;
    this.monthList = [1,2,3,4,5,6,7,8,9];

    $scope.next       = function(event, form) {
        event.preventDefault();

        this.formData = form.formData;


        $state.go('confirm');
    };

    $scope.prev = function(event) {
        event.preventDefault();

        $state.go('top');
    }

}]);

app.controller('ConfirmController',
    [ '$scope','$state','FormDataSharedService',
    function($scope, $state, FormDataSharedService) {

    this.formData = FormDataSharedService.formData;

    $scope.next       = function(event) {
        event.preventDefault();

        $state.go('comp');
    };

    $scope.prev = function(event) {
        event.preventDefault();

        $state.go('input');
    }

}]);

app.controller('CompController',
    [ '$scope','$state','FormDataSharedService',
    function($scope, $state, FormDataSharedService) {

    this.formData = FormDataSharedService.formData;

    $scope.prev = function(event) {
        event.preventDefault();

        $state.go('top');
    }

}]);

