angular.module('app').controller('TaskEditController',
    function ($window, $routeParams, tasks) {
        var vm = this;
        console.log($routeParams.id);
        vm.task = tasks[$routeParams.id];
        vm.edit = edit;

        function edit(){
            tasks[$routeParams.id] = vm.task;
            $window.history.back();
            //console.log($window.history);
        }
    });