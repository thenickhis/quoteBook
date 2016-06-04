angular.module("quoteBook")
	.controller('mainCtrl', function ($scope, dataService) {
		$scope.quotes = dataService.getData();
		$scope.addQuote = function() {
			if ($scope.newQuote) {
				var author = prompt("Please enter your name.");
				dataService.addData($scope.newQuote,author);
				$scope.newQuote = "";
			} else {
				alert("Please enter your quote.");
			}
		}
		$scope.remove = function(str) {
			$scope.quotes = dataService.removeData(str);
		}
	});