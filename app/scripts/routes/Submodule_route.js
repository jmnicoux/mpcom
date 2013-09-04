App.SubmoduleRoute = Em.Route.extend({
  model: function(params, transition) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve) {
      resolve(self.store.find('submodule', params.submodule_id));
    });
  },
  afterModel: function(model, transition){
    var submodules = transition.resolvedModels.module._data.submodules;
    var isValidSubmodule = submodules.filterProperty('id', model.id).length;
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
