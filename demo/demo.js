'use strict';

angular.module('dcDragAndDropDemo', ['dcDragAndDrop'])
.controller('DemoCtrl', function($scope){
  $scope.text = "Drop Here!";
  $scope.status = "idle"

  $scope.test = function(evt){
    alert('test');
  }

   $scope.handleDragStart = function(e) {
      var element = e.srcElement;
      if(!element.style){
        e.preventDefault();
        return false;
      }
      element.style.opacity = '0.5';
      $scope.status = 'Dragging!';
      e.dataTransfer.setData('element', $scope.dropText ? $scope.dropText : element.innerHTML);
    };

    $scope.handleDragEnd = function(e) {
      if(e.srcElement.style) e.srcElement.style.opacity = '1';
      $scope.status = 'idle';
    };

    $scope.handleDragOver = function(e) {
      if (e.preventDefault && e.dataTransfer.getData('element')) {
        e.preventDefault();
      }
      return false;
    };

    $scope.handleDragLeave = function(e) {
      e.srcElement.style.background = 'blue';
      return false;
    };

    $scope.handleDragEnter = function(e){
      e.srcElement.style.background = 'red';
    }

    $scope.handleDrop = function(e){
      e.preventDefault();
      e.srcElement.innerHTML= e.dataTransfer.getData('element');
      e.srcElement.style.background = 'green'
};

});
