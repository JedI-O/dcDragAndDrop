'use strict';

angular.module('dcDragAndDropDemo', ['dcDragAndDrop'])
.controller('DemoCtrl', function($scope){
  $scope.text = "Drop Here!";
  $scope.status = "idle"

  $scope.test = function(){
    alert('test');
  }

   $scope.handleDragStart = function(e) {
      this.style.opacity = '0.5';
      $scope.status = 'Dragging!';
      $scope.$apply();
      e.dataTransfer.setData('element', this.innerHTML);
    };

    $scope.handleDragEnd = function(e) {
      this.style.opacity = '1';
      $scope.status = 'idle';
      $scope.$apply();
    };

    $scope.handleDragOver = function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      this.style.background = 'red';
      return false;
    };

    $scope.handleDragLeave = function(e) {
      this.style.background = 'blue';
      return false;
    };

    $scope.handleDrop = function(e){
      console.log(e.dataTransfer.getData("element"));
      this.innerHTML= e.dataTransfer.getData('element');
      this.style.background = 'green'
};

});
