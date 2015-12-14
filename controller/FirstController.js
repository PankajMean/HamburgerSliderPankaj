app.controller('FirstController', function($scope){
    $scope.data = 'TEST';
    $scope.toggleButton = false;
    $scope.toggle = function() {
        $scope.toggleButton = ! $scope.toggleButton;
    }
    
});
