// Controller: delete a specific movie
app.controller('DeleteVideoCtrl', ['$scope', '$resource', '$location', '$routeParams',
    function ($scope, $resource, $location, $routeParams) {

        var movies = $resource('/api/movies/:id');

        movies.get({id: $routeParams.id}, function (movie) {
            $scope.movie = movie;
        });

        $scope.delete = function () {
            movies.delete({id: $routeParams.id}, function (movie) {
                $location.path('/');
            });
        }
    }]);