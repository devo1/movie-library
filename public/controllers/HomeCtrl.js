// Controller: get list of all movies
app.controller('HomeCtrl', ['$scope', '$resource',
    function ($scope, $resource) {
        var movies = $resource('/api/movies');
        movies.query(function (movies) {
            $scope.movies = movies;
     });
}]);