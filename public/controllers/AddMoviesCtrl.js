// Controller: add a movie the library
app.controller('AddVideoCtrl', ['$scope', '$resource', '$location',
    function($scope, $resource, $location){

        $scope.save = function(){
            var movies = $resource('/api/movies');
            movies.save($scope.movie, function(){
                $location.path('/');
        });
     };
}]);