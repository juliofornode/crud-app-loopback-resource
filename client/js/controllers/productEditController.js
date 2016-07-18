(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductEditController', ProductEditController);

    function ProductEditController(id, $state, Product, $stateParams) {
        var vm = this;


        vm.product = Product.get({
            id: $stateParams.id
        });


        vm.save = function() {
            vm.product.$save(function() {
                $state.go('products');
            });
        };


/*        vm.remove = Product.deleteById({
            id: $stateParams.id
        });*/

        vm.remove = function() {
             Product.deleteById({
                id: $stateParams.id
             },
             $state.go('products'));
        };

        vm.cancel = function() {
            $state.go('products');
        };

    }

}());