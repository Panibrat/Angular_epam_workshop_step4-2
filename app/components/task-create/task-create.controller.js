angular.module('app').controller('TaskCreateController',
    function ($window, tasks) {
        var vm = this;
        //console.log($routeParams);
        vm.task = {
            name: '',
            description: ''
        };
        vm.create = create;

        function create(){
            tasks.push(vm.task);
            $window.history.back();
        }
    });