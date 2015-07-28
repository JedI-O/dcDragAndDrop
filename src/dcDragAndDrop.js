(function(angular){
angular.module('dcDragAndDrop', []);
angular.module('dcDragAndDrop').directive('dcDraggable', function() {
	return {
		restrict : "A",
		scope: {
			handleDragStart: "=",
			handleDragEnd: "=",
			handleDragEnter: "="
		},
		link : function(scope, element, attrs) {
			element.attr('draggable', 'true');
			element.on("dragstart", scope.handleDragStart);
			element.on("dragend", scope.handleDragEnd);
			element.on("dragenter", scope.handleDragEnter);
		}
	}
});

angular.module('dcDragAndDrop').directive('dcDroppable', function(){
	var listeners = [];
	return {
		restrict : "A",
		scope: {
			handleDrop: '=',
			handleDragOver: '=',
			handleDragLeave: '='
		},
		link : function(scope, element, attrs) {
			myElement = element;
			if(scope.handleDrop)
				element.on("drop", scope.handleDrop);
			if(scope.handleDragOver)
				element.on("dragover", scope.handleDragOver);
			else
				element.on("dragover", function(e){
					if(e.preventDefault){
						e.preventDefault();
					}
				});
			if(scope.handleDragLeave)
				element.on("dragleave", scope.handleDragLeave);

			element.on('$destroy', function(){
				listeners.forEach(function(listener){
					element.unbind(listener);
				});
			});
		}
	}
});
})(angular);
