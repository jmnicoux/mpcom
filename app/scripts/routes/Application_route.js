App.ApplicationRoute = Em.Route.extend({

  model: function() {
    //var self = this; return new Ember.RSVP.Promise(function(resolve) { Em.run.later(function() { resolve( self.store.find('module') );}, 5000); });
    return this.store.findAll('module').then(function (modules) {
      return modules;
    });
  },

  actions: {
    error: function() {
      console.log('app route pb!');
      this.transitionTo('index');
    },
    navTo: function (destination) {
      destination += ".index";
      console.log('debug', this, destination);
      this.controller.transitionToRoute(destination);
    }
  }

});
