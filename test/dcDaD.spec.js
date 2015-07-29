'use strict';

describe('dcDragAndDrop', function() {
  var element;

  beforeEach(module('dcDragAndDrop'));

  afterEach(function() {
    dealoc(element);
  });

describe('dcDragstart', function(){
  it('should have draggable="true"', inject(function($rootScope, $compile) {
    element = $compile('<div dc-dragstart="dragged = true"></div>')($rootScope);
    $rootScope.$digest();
    expect(element.attr('draggable')).toEqual('true');
  }));


  it('should get called on a dragstart', inject(function($rootScope, $compile) {
    element = $compile('<div dc-dragstart="dragged = true"></div>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.dragged).toBeFalsy();

    browserTrigger(element, 'dragstart');
    expect($rootScope.dragged).toEqual(true);
  }));

  it('should pass event object on dragstart', inject(function($rootScope, $compile) {
    element = $compile('<div dc-dragstart="event = $event"></div>')($rootScope);
    $rootScope.$digest();

    browserTrigger(element, 'dragstart');
    expect($rootScope.event).toBeDefined();
  }));

  it('should get called on a dragend', inject(function($rootScope, $compile) {
    element = $compile('<div dc-dragstart dc-dragend="dragged = true"></div>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.dragged).toBeFalsy();

    browserTrigger(element, 'dragend');
    expect($rootScope.dragged).toEqual(true);
  }));

  it('should pass event object on dragend', inject(function($rootScope, $compile) {
    element = $compile('<div dc-dragstart dc-dragend="event = $event"></div>')($rootScope);
    $rootScope.$digest();

    browserTrigger(element, 'dragend');
    expect($rootScope.event).toBeDefined();
  }));

  it('should get called on a drag', inject(function($rootScope, $compile) {
    element = $compile('<div dc-dragstart dc-drag="dragged = true"></div>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.dragged).toBeFalsy();

    browserTrigger(element, 'drag');
    expect($rootScope.dragged).toEqual(true);
  }));

  it('should pass event object on drag', inject(function($rootScope, $compile) {
    element = $compile('<div dc-dragstart dc-drag="event = $event"></div>')($rootScope);
    $rootScope.$digest();

    browserTrigger(element, 'drag');
    expect($rootScope.event).toBeDefined();
  }));

});

describe('dcDroppable', function(){

  it('should get called on a dragover', inject(function($rootScope, $compile) {
    element = $compile('<div dc-droppable dc-dragover="dragged = true"></div>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.dragged).toBeFalsy();

    browserTrigger(element, 'dragover');
    expect($rootScope.dragged).toEqual(true);
  }));

  it('should pass event object on dragover', inject(function($rootScope, $compile) {
    element = $compile('<div dc-droppable dc-dragover="event = $event"></div>')($rootScope);
    $rootScope.$digest();

    browserTrigger(element, 'dragover');
    expect($rootScope.event).toBeDefined();
  }));

  it('should get called on a dragenter', inject(function($rootScope, $compile) {
    element = $compile('<div dc-droppable dc-dragenter="dragged = true"></div>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.dragged).toBeFalsy();

    browserTrigger(element, 'dragenter');
    expect($rootScope.dragged).toEqual(true);
  }));

  it('should pass event object on dragenter', inject(function($rootScope, $compile) {
    element = $compile('<div dc-droppable dc-dragenter="event = $event"></div>')($rootScope);
    $rootScope.$digest();

    browserTrigger(element, 'dragenter');
    expect($rootScope.event).toBeDefined();
  }));

  it('should get called on a dragleave', inject(function($rootScope, $compile) {
    element = $compile('<div dc-droppable dc-dragleave="dragged = true"></div>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.dragged).toBeFalsy();

    browserTrigger(element, 'dragleave');
    expect($rootScope.dragged).toEqual(true);
  }));

  it('should pass event object on dragleave', inject(function($rootScope, $compile) {
    element = $compile('<div dc-droppable dc-dragleave="event = $event"></div>')($rootScope);
    $rootScope.$digest();

    browserTrigger(element, 'dragleave');
    expect($rootScope.event).toBeDefined();
  }));

});


});
