App.ApplicationRoute = Em.Route.extend({

  model: function() {
    //var self = this; return new Ember.RSVP.Promise(function(resolve) { Em.run.later(function() { resolve( self.store.find('module') );}, 5000); });
    return this.store.find('module').then(function (modules) {
      return modules;
    })
  },

  actions: {
    error: function() {
      this.transitionTo('index');
    }
  }
  
});