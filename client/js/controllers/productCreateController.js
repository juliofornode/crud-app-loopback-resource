(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductCreateController', ProductCreateController);

    function ProductCreateController($state, Product) {
        var vm = this;
        vm.product = new Product();

        vm.create = function() {
            vm.product.$save(function() {
                $state.go('products');
            });
        };

        vm.cancel = function() {
            $state.go('products');
        };

    }

}());