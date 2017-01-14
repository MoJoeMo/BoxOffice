(function() {
    
    var app = angular.module('movieApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller  : 'MovieCtrl',
                templateUrl : 'views/movie.html' 
            })
            .when('/moviepage/:movieRank', {
                controller  : 'PageCtrl',
                templateUrl : 'views/moviepage.html'
            })
            .otherwise({ redirectTo : '/' });
    });
    
}());