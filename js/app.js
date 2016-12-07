(function(){
  'use strict'
  angular.module("LunchCheck",[])
  .controller ("LunchCheckController",LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.isItemTooMuch = function(){
      if($scope.lunchItems){
        $scope.formClass = "inputsuccess";
        $scope.textClass = "textsuccess";
        $scope.messageFlag = calculateLunchItems($scope.lunchItems);

      }
      else{
        $scope.messageFlag = "Please enter data first";
        $scope.formClass = "inputerror";
        $scope.textClass="texterror";
      }

  }
  $scope.reset = function(){
    $scope.lunchItems="";
    $scope.messageFlag="";
  }
  function calculateLunchItems(string){
    var totalLunchItems = string.split(",");
    totalLunchItems = totalLunchItems.filter(function(entry) { return entry.trim() != ''; });
    console.log("totalLunchItems ",totalLunchItems);
    if(totalLunchItems.length<=3)
    return "Enjoy";
    else
    return "Too much!";
  }
}
})();
