(function() {
    
    var MovieCtrl = function ($scope, movieFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.movies = [];
        $scope.appSettings = appSettings;
        
        function init() {
            $scope.movies = movieFactory.getMovies();
        }
        init();
        
        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }        
    }
    //handle DI to avoid minification errors
    MovieCtrl.$inject = ['$scope', 'movieFactory', 'appSettings'];
    //define the controller in angular
    angular.module('movieApp').controller('MovieCtrl', MovieCtrl);
}());