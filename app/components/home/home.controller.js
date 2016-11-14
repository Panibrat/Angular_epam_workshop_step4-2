angular.module('app').controller('HomeController', function (tasks) {
    var vm = this;
console.log(tasks);
    vm.tasks = tasks;
});