(function() {
    
    var movieFactory = function() {
        // set the data
        var movies = [
            { 
                "rank" : 1, 
                "title" : "The Hunger Games - Mockingjay Part 1", 
                "genre" : "Action / Adventure",
                "rating" : "PG-13",
                "studio" : "Lionsgate",
                "director" : "Francis Lawrenece",
                "gross" : 336189000,
                "icon" : "images/jaybird.png",
                "label" : "jaybird",
                "poster" : "mockingjay"
            },
            {
                "rank" : 2, 
                "title" : "Guardians of the Galaxy", 
                "genre" : "Action / Adventure",
                "rating" : "PG-13",
                "studio" : "Walt Disney / Marvel Studios",
                "director" : "James Gunn",
                "gross" : 336176000,
                "icon" : "images/guardians.png",
                "label" : "guardians",
                "poster" : "galaxy"
            },
            {
                "rank" : 3, 
                "title" : "American Sniper", 
                "genre" : "Drama",
                "rating" : "R",
                "studio" : "Warner Brothers",
                "director" : "Clint Eastwood",
                "gross" : 307158000,                
                "icon" : "images/target.png",
                "label" : "target",
                "poster" : "sniper"
            },
            {
                "rank" : 4, 
                "title" : "Captain America: The Winter Soldier", 
                "genre" : "Action / Adventure",
                "rating" : "PG-13",
                "studio" : "Walt Disney / Marvel Studios",
                "director" : "Anthony Russo & Joe Russo",
                "gross" : 259766572,                
                "icon" : "images/captain.png",
                "label" : "captain",
                "poster" : "winter"
            },
            {
                "rank" : 5, 
                "title" : "The LEGO Movie", 
                "genre" : "Animation",
                "rating" : "PG",
                "studio" : "Warner Brothers",
                "director" : "Phil Lord & Chris Miller",
                "gross" : 259766572,                
                "icon" : "images/lego.png",
                "label" : "lego",
                "poster" : "legomovie"
            }
        ];
        
        //create a singleton object to return through the factory
        var factory = {};
        
        //create functions to be used in the factory
        factory.getMovies = function() {
            return movies;
        };
        factory.getMovie = function(movieRank) {
            for(var i = 0, len = movies.length; i < len; i++) {
                if(movies[i].rank === parseInt(movieRank)){
                    return movies[i];
                }
            }
            return {};
        };
        
        //return the singleton object
        return factory;
    }
    //define the factory in the angular module
    angular.module('movieApp').factory('movieFactory', movieFactory);
}());