var app = angular.module('testApp', []);
app.controller('carsCtrl', function($scope, $http){
	$http.get('voiture.json').then(function(reponse){
		$scope.cars = reponse.data
	});
});
