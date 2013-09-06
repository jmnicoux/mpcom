App.MusicRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log(params);
    return this.store.find('music').then(function (submodules) {
      return submodules;
    });
  },
/*
  afterModel: function(model, transition){
    var validElements = transition.resolvedModels.submodule._data.elements;
    var isValidElement = validElements.filterProperty('id', model.id).length;
    if ( !isValidElement ){
      this.transitionTo('submodule');
    }
  },
*/

  renderTemplate: function() {
    this.render();
  },

  actions: {
    error: function() {
      this.transitionTo('index');
    },
    navTo: function (destination) {
      console.log('music dest', destination);
      this.transitionTo(destination);
    }
  }
});
