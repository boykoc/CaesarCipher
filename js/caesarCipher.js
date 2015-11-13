angular.module('caesarCipherApp', [])
  .controller('CaesarCipherController', ['$scope', function($scope) {
  	$scope.submit = function() {
  		$scope.results = []; // Array of all string options  		
  		// Loop over all letters of the alphabet/key options
  		for (var i = 0; i < 26; i++) {
  			$scope.tempString = "";
  			// Loop over each char of string 
  			for (var x = 0; x < $scope.yourString.length; x++) {
  				// Build new string by adding i value
  				var letter = $scope.yourString.charAt(x);
  				console.log(letter);
  				// Set encoding ranges ascii a=97, z=122 (-32 for upper case)
  				// A=65, Z=90
  				// TODO: Clean this up.
  				if (letter.charCodeAt() >=65 && letter.charCodeAt() <=90) { // It's a capital
  					if ( letter.charCodeAt()+i > 90) { // Over caps range so wrap
  						$scope.tempString += String.fromCharCode(letter.charCodeAt()+i - 26);
  					} else {
  						$scope.tempString += String.fromCharCode(letter.charCodeAt()+i);
  					}
  				} else if (letter.charCodeAt() >=97 && letter.charCodeAt() <=122 ) { // It's lower case
  					if ( letter.charCodeAt()+i > 122) { // Over lower case range so wrap
  						$scope.tempString += String.fromCharCode(letter.charCodeAt()+i - 26);
  					} else {
  						$scope.tempString += String.fromCharCode(letter.charCodeAt()+i);
  					} 
  				} else {				
  					$scope.tempString += letter;
  				}
  			};
  			// Push new string to array
  			$scope.results.push($scope.tempString);
  		};
  	};
  }]);
