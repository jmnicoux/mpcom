App.SubmoduleRoute = Em.Route.extend({

  model: function(params, transition) {
    return this.store.find('submodule', params.submodule_id).then(function (submodule) {
      return submodule;
    });
  },

  afterModel: function(model, transition){
    var validSubmodules = transition.resolvedModels.module._data.submodules;
    var isValidSubmodule = validSubmodules.filterProperty('id', model.id).length;
    if ( !isValidSubmodule ){
      this.transitionTo('module');
    }
  },

  actions: {
    error: function() {
      this.transitionTo('module');
    }
  }
  
});
