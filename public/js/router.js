app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled : true
    });

    $stateProvider.state('page1', {
        url     : 'test/page1',
        views   : {
            container   : {
                templateUrl     : 'public/html/page1.html',
                //controller      : 'Page1Controller as page1'
            }
        }
    })
        .state('page2', {
            url : 'test/page2',
            views   : {
                container   : {
                    templateUrl     : 'public/html/page2.html',
                    //controller      : 'Page2Controller as page2'
                }
            }
        })
        .state('page3', {
            url : '/test/page3',
            views   : {
                container   : {
                    templateUrl     : '/html/page3',
                    controller      : 'Page3Controller as page3'
                }
            }
        })
        .state('page4', {
            url : '/test/page4',
            views   : {
                container   : {
                    templateUrl     : '/html/page4',
                    controller      : 'Page4Controller as page4'
                }
            }
        })
        // ここから
        .state('top', {
            url : '/',
            views   : {
                container   : {
                    templateUrl     : 'public/html/top.html',
                    controller      : 'TopController as top'
                }
            }
        })
        .state('input', {
            url : '/input',
            views   : {
                container   : {
                    templateUrl     : 'public/html/input.html',
                    controller      : 'InputController as input'
                }
            }
        })
        .state('confirm', {
            url : '/confirm',
            views   : {
                container   : {
                    templateUrl     : 'public/html/confirm.html',
                    controller      : 'ConfirmController as confirm'
                }
            }
        })
        .state('comp', {
            url : '/comp',
            views   : {
                container   : {
                    templateUrl     : 'public/html/comp.html',
                    controller      : 'CompController as comp'
                }
            }
        });



}]);