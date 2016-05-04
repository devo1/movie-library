// Controller: update a specific movie
app.controller('EditVideoCtrl', ['$scope', '$resource', '$location', '$routeParams',
    function ($scope, $resource, $location, $routeParams) {

        var movies = $resource('/api/movies/:id', {id: '@_id'}, {
            update: {method: 'PUT'}
        });

        movies.get({id: $routeParams.id}, function (movie) {
            $scope.movie = movie;
        });

        $scope.save = function () {
            movies.update($scope.movie, function () {
                $location.path('/');
            });
        }
    }]);