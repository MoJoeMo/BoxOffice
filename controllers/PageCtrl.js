(function() {
    
    var PageCtrl = function ($scope, $routeParams, movieFactory) {      
        
        var movieRank = $routeParams.movieRank;
        
        //create a function that searches the rooms for id
        function init() {
            $scope.movie = movieFactory.getMovie(movieRank);
        }
        init();
        
    }
    //handle DI to avoid minification errors
    PageCtrl.$inject = ['$scope', '$routeParams', 'movieFactory'];
    //define the controller in angular
    angular.module('movieApp').controller('PageCtrl', PageCtrl);
}());