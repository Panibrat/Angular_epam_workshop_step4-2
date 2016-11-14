(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<home/>'
/*                    templateUrl: 'components/home/home.html',
                    controller: 'HomeController',
                    controllerAs: '$ctrl'*/
            })
                .when('/task/:id', {
                    template: '<task></task>'
/*                    templateUrl: 'components/task-details/task-details.html',
                    controller: 'TaskDetailsController',
                    controllerAs: '$ctrl'*/
                })
                .when('/create', {
                    template: '<task-create></task-create>'
/*                    templateUrl: 'components/task-details/task-details.html',
                    controller: 'TaskDetailsController',
                    controllerAs: '$ctrl'*/
                })
                .when('/edit/:id', {
                    template: '<task-edit></task-edit>'
/*                    templateUrl: 'components/task-details/task-details.html',
                    controller: 'TaskDetailsController',
                    controllerAs: '$ctrl'*/
                })
                .otherwise({
                    redirectTo: '/404'
                });
        });
}());