var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function($scope) {
    
    $scope.test = "Hello AK!";
    
    $scope.friends = [
        {
            name: 'Jake',
            occupation: 'Wizard',
            location: 'Idaho'
        },
        
        {
            name: 'Dan',
            occupation: 'Dragon Slayer',
            location: 'Narnia'
        },
        
        {
            name: 'Kelly',
            occupation: "Knight's Watch",
            location: 'The Wall'
        },
        
        {
            name: 'James',
            occupation: 'Wizard Apprentice',
            location: 'Dreamland'
        }
    ];
    
}]);