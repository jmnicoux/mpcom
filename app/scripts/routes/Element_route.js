App.ElementRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log(params)
    return this.store.find('element', params.element_id).then(function (element) {
      return element;
    });
  },

  afterModel: function(model, transition){
    var validElements = transition.resolvedModels.submodule._data.elements;
    var isValidElement = validElements.filterProperty('id', model.id).length;
    if ( !isValidElement ){
      this.transitionTo('submodule');
    }
  },

  actions: {
    error: function() {
      this.transitionTo('submodule');
    }
  }
});
