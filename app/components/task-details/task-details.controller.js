angular.module('app').controller('TaskDetailsController',
    function ($window, $routeParams, tasks) {
        var vm = this;
        //console.log($routeParams);
        vm.task = tasks[$routeParams.id];
        vm.id = $routeParams.id;
        vm.goBack = goBack;

        function goBack(){
            $window.history.back();
        }
});