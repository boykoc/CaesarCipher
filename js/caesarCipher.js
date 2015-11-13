angular.module('caesarCipherApp', [])
  .controller('CaesarCipherController', ['$scope', function($scope) {
  	$scope.submit = function() {
  		$scope.results = []; // Array of all string options

  		// Loop over all letters of the alphabet/key options
  		for (var i = 0; i < 25; i++) {
  			// Loop over each char of string 
  			for (var i = 0; i < Things.length; i++) {
  				// Build new string by adding i value

  				// Push new string to array

  			};
  			

  		};
  	};
  }]);
