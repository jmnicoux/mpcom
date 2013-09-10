App.MusicRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('music models requested');
    var self = this;
    return this.store.findAll('music').then(function (submodules) {
      self.controllerFor('music.index').set('content', submodules);
      console.log(submodules + 'found !!!', self.controllerFor('music.index').get('content.content'));
      return self.controllerFor('music.index').get('content.content');
    });
  },

  actions: {
    error: function() {
      this.transitionTo('index');
    },
    subNavTo: function (destination) {
      console.log('music subnav dest : ', destination);
      this.transitionTo(destination);
    }
  },

  renderTemplate: function() {
    //this.render('application'),
    this.render('module', {
      controller: 'music.index',
      into: 'application'
    });
  }

});
