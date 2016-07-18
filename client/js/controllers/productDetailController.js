(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductDetailController', ProductDetailController);

    function ProductDetailController(id, Product, $stateParams) {

        var vm = this;

        vm.product = Product.get({
            id: $stateParams.id
        }); // get() returns a single entry

    }

}());