// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {
    $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
	$scope.emailrg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// function to submit the form after all validation has occurred			
	
    $scope.datas = [];
	if (localStorage.getItem('user-list')){
		$scope.datas = angular.fromJson(localStorage.getItem('user-list'));

	}
	$scope.add_user = function(){
		var user = [];
			user.name = $scope.name;
			user.email = $scope.email;
			user.password = $scope.password;			
		$scope.datas.push(user);
		localStorage.setItem('user-list', angular.toJson($scope.datas));
		console.log($scope.datas);
	};
	$scope.login = function(){
		var user = check
	}
	function check_login(namel,pass){
		for (var i = 0; i < $scope.datas.length;i++) {
			if($scope.datas[i].name == namel && $scope.datas[i].password == pass) {
				return $scope.datas[i];
			}
		}
		return false;
	}
});