var app =  angular.module('App', [])    
    .controller('Ctrl', [
        '$scope',
        function ($scope) {
	

    
    $scope.config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
    }
         	$scope.switch='3';  
	}]);







