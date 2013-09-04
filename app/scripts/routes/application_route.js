App.ApplicationRoute = Em.Route.extend({
  model: function() {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve) {
      //Ember.run.later(function() { resolve( self.store.find('module') );}, 5000);
      resolve( self.store.find('module') );
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    }
  }
});