(function(angular){

angular.module('dcDragAndDrop', []);
angular.module('dcDragAndDrop').directive('dcDragstart', ['$parse', function($parse) {
	return {
		restrict: 'A',
		compile: function($element, attr) {
			return function ngEventHandler(scope, element) {
				element.attr('draggable', 'true');
				'Dragstart Dragend Drag'.split(' ').forEach(function(attrName){
					var evtName = attrName.toLowerCase();
					attrName = 'dc'+attrName;
				  var fn = $parse(attr[attrName], /* interceptorFn */ null, /* expensiveChecks */ true);
				  element.on(evtName, function(event) {
				  	var callback = function() {
				  		fn(scope, {$event:event});
				  	};
				  	scope.$apply(callback);
				  });
			  });
			};
		}
}}]);

angular.module('dcDragAndDrop').directive('dcDroppable', ['$parse', function($parse) {
	return {
		restrict: 'A',
		compile: function($element, attr) {
			return function ngEventHandler(scope, element) {
				element.attr('draggable', 'true');
				'Drop Dragover Dragenter Dragleave'.split(' ').forEach(function(attrName){
					var evtName = attrName.toLowerCase();
					attrName = 'dc'+attrName;
					var fn = $parse(attr[attrName], /* interceptorFn */ null, /* expensiveChecks */ true);
					element.on(evtName, function(event) {
						var callback = function() {
							fn(scope, {$event:event});
						};
						scope.$apply(callback);
					});
				});
			};
		}
	}}]);
})(angular);
