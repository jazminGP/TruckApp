var app = angular.module('truckApp', []);

/*app.controller('InputDataCtrl', function($scope, $http) {
 $http.jsonp( 'http://localhost/mto/sql.php?callback=JSON_CALLBACK'
 ).then( function ( response ) {
 $scope.inputDatas = response.data;
 });
 });
 */




function InputDataCtrl($scope, $http) {
     $scope.loadData = function() {
     $http.jsonp('http://mtoserver.dyndns.org/mto/sql.php?callback=JSON_CALLBACK'
     ).then(function(response) {
     $scope.inputDatas = response.data;
     getData();
     });
     };
/*
    $scope.loadData = function() {
         $.jsonp({
            url: 'http://mtoserver.dyndns.org/mto/sql.php',
            callbackParameter: 'callback',
            success: function(data, status) {
                $scope.inputDatas = data;
            },
            error: function() {
                alert("Keine Internetverbindung...");
            }
        });
    };
*/
    $scope.loadData();
}

