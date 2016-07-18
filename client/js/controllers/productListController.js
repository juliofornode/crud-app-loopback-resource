(function() {

    "use strict";

    angular.module('myApp')
        .controller('ProductListController', ProductListController);

    function ProductListController(Product) {

        var vm = this;

        //list all products
        vm.products = Product.query(function() {
        }); //query() returns all the entries

        vm.imageShowed = true;

        vm.imageToggle = function() {
            vm.imageShowed = !vm.imageShowed;
        }
    }

}());


