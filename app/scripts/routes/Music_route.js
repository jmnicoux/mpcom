App.MusicRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('music models requested');
    return this.store.findAll('music').then(function (submodules) {
      console.log(submodules + 'found !!!');
      return submodules;
    });
  },

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
