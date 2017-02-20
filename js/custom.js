var appApp = angular.module('appApp', ['ui.select']);

appApp.controller('MainCtrl', function($scope){
    $scope.world = 'hello'
    $scope.columns =  ["Matrix_Unique_ID", "PostalCode", "Great", "Email", "Crazy", "Phone"];
    $scope.data = {
        Matrix_Unique_ID: ["1234", "1234", "1234"],
        Zip_Code: ["1234", "1234", "1234"],
        Address: ["89/c", "89/D", "90/A"]
}

    $scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
    ];

    $scope.selected = { value: $scope.itemArray[0] };
    
    $scope.getFields = function (field) {
        console.log(field);
        
        return  $scope.itemArray
    }
});