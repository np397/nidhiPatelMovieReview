app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
    { 
      title:	'The Hunger Games: Mockingjay', 
      iscore:	6.7,
      rating:	'PG-13',
      runtime:	137,
      released:	new Date('2015', '10', '20'),
      country:	'USA',
      posters:	['img/hungerGames_1.jpg','img/hungerGames_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt1951266',
      website:	'https://www.facebook.com/TheHungerGamesMovie',
      likes:	753,
      dislikes:	91,
      posterindex: 0
	},
    { 
      title:	'The Martian', 
      iscore:	8.1,
      rating:	'PG-13',
      runtime:	144,
      released:	new Date('2015', '9', '2'),
      country:	'USA',
      posters:	['img/martian_1.jpg','img/martian_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt3659388',
      website:	'https://www.facebook.com/MartianMovie',
      likes:	863,
      dislikes:	102,
      posterindex: 0
	},
    { 
      title:	'San Andreas', 
      iscore:	6.1,
      rating:	'PG-13',
      runtime:	114,
      released:	new Date('2015', '4', '29'),
      country:	'USA',
      posters:	['img/sanAndreas_1.jpg','img/sanAndreas_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt2126355',
      website:	'https://www.facebook.com/sanandreasmovie',
      likes:	983,
      dislikes:	126,
      posterindex: 0
	}
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title = "IMDB + Nidhi's Top 8 Movies";
	$scope.owner = "Nidhi";
	$scope.github = "https://github.com/np397/is219s16patel-p3";
	
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
	$scope.like = function(index)
	{
		$scope.movies[index].likes++;
		return $scope.movies[index].likes;
	}
	
	$scope.dislike = function(index)
	{
		$scope.movies[index].dislikes++;
		return $scope.movies[index].dislikes;
	}
	
	$scope.posterClick = function(index)
	{
		
		if($scope.movies[index].posterindex <= $scope.movies[index].posters.length - 2)
		{
			$scope.movies[index].posterindex++;
		}
		else
		{
			$scope.movies[index].posterindex = 0;
		}
		
		return $scope.posterindex;
	}
	
	$scope.timeText = function(minutes)
	{
		var hours;
		var mins;
		
		hours = Math.floor(minutes/60);
		mins = minutes%60;
		
		var run = hours + "h " + mins + "m";
		return run;
	}		
}]);
