App.ProgramsRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('prgs route', params)
    return this.store.findAll('program').then(function (programs) {
      return programs;
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
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    subNavTo: function (destination) {
      console.log('subnav dest', destination);
      this.transitionTo('program', destination);
    }
  }
});

App.ProgramRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('prg route', params)
    return this.store.find('program').then(function (programs) {
      return programs;
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
  actions: {
    error: function() {
      this.transitionTo('index');
    }
  }
});
