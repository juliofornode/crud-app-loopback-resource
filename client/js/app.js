(function() {

    "use strict";

    var myApp = angular.module('myApp', ['ui.router', 'ngResource', 'lbServices']);

    myApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home.html'
            })
            .state('products', {
                url: '/products',
                templateUrl: 'partials/productListView.html',
                controller: 'ProductListController as vm'
            })
            .state('productCreate', {
                url: '/products/new',
                templateUrl: 'partials/productCreate.html',
                controller: 'ProductCreateController as vm'
            })
            .state('productDetail', {
                url: '/products/:id',
                templateUrl: 'partials/productDetail.html',
                controller: 'ProductDetailController as vm',
                resolve: {
                    id: function($stateParams) {
                        return $stateParams.id;
                    }
                }
            })
            .state('productEdit', {
                url: '/products/:id',
                templateUrl: 'partials/productEdit.html',
                controller: 'ProductEditController as vm',
                resolve: {
                    id: function($stateParams) {
                        return $stateParams.id;
                    }
                }
            });


    });

}());
