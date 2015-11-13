angular.module('caesarCipherApp', [])
  .controller('CaesarCipherController', ['$scope', function($scope) {
  	$scope.submit = function() {
  		$scope.results = []; // Array of all string options  		
  		// Loop over all letters of the alphabet/key options
  		for (var i = 0; i < 25; i++) {
  			$scope.tempString = "";
  			// Loop over each char of string 
  			for (var x = 0; x < $scope.yourString.length; x++) {
  				// Build new string by adding i value
  				var letter = $scope.yourString.charAt(x);
  				$scope.tempString += String.fromCharCode(letter.charCodeAt()+i);
  			};
  			// Push new string to array
  			$scope.results.push($scope.tempString);
  		};
  	};
  }]);
