var app = angular.module('movies', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/add-movie', {
            templateUrl: 'partials/movie-form.html',
            controller: 'AddMoviesCtrl'
        })
        .when('/movie/:id', {
            templateUrl: 'partials/movie-form.html'
        })
        .when('/movie/:id', {
            templateUrl: 'partials/movie-form.html',
            controller: 'EditMoviesCtrl'
        })
        .when('/movie/delete/:id', {
            templateUrl: 'partials/movie-delete.html',
            controller: 'DeleteMoviesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);







