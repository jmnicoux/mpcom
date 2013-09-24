/*globals Em*/
App.ApplicationRoute = Em.Route.extend({

  model: function() {
    var store = this.get('store');
    return store.findAll('module').then(function (modules) {
      return modules;
    });
  },
  afterModel: function(models){
    var modulesController = this.controllerFor('modules');
    modulesController.set('content', models);
  },
  renderTemplate: function() {
    this.render('application');
    this.render('navigation', {
      outlet: 'navigation',
      into: 'application',
      controller: 'application'
    });
    this.render('details', {
      outlet: 'details',
      into: 'application'
    });
  }

});

App.IndexRoute = Ember.Route.extend({
  //redirect: function() {
  //  this.transitionTo('music');
  //}
});


App.SubmoduleRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render('submodule', {
      outlet: 'submodule',
      into: 'module'
    });
  }
});

App.ModuleRoute = Em.Route.extend({
  model: function() {
    return this.store.find('module', this.routeName).then(function (module) {
      return module;
    });
  },
  afterModel: function(model){
    this.controllerFor('module').set('content', model);
    var submodulesController = this.controllerFor('submodules');
    submodulesController.set('content', model.get('submodules'));
  },
  renderTemplate: function(controller, model) {
    this.render('module', {
      outlet: 'module',
      into: 'application',
      controller: 'module'
    });
  }
});

App.MusicRoute = App.ModuleRoute.extend();
App.MusicIndexRoute = Em.Route.extend({
  //redirect: function() {
  //  this.transitionTo('playlist');
  //}
});


App.AdsRoute = App.ModuleRoute.extend();
App.AdsIndexRoute = Em.Route.extend({
  //redirect: function() {
  //  this.transitionTo('planning');
  //}
});
App.SettingsRoute = App.ModuleRoute.extend();
App.MaintenanceRoute = App.ModuleRoute.extend();
App.HelpRoute = App.ModuleRoute.extend();



App.DiagnosticRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render('diagnostic', {
      outlet: 'submodule',
      into: 'module'
    });
  }
});


App.PlaylistRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.findAll('playlistLine').then(function (playlists) {
      return playlists;
    });
  },
  renderTemplate: function() {
    this.render('playlist', {
      outlet: 'submodule',
      into: 'module'
    });
  }
});

App.ProgramsRoute = App.SubmoduleRoute.extend();

App.ProgramsIndexRoute = Em.Route.extend({
  model: function() {
    //var self = this; return new Ember.RSVP.Promise(function(resolve) { Em.run.later(function() { resolve( self.store.findAll('program') );}, 5000); });
    return this.store.findAll('program').then(function (programs) {
      return programs;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('module');
    },
    subNavTo: function (destination) {
      this.transitionTo('program', destination);
    }
  },
  renderTemplate: function() {
    this.render('programs.index', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});

App.ProgramRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.find('program', params.program_id).then(function (program) {
      return program;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('module');
    },
    navToBasket: function (destination) {
      this.transitionTo('basket', destination);
    }
  },
  renderTemplate: function() {
    this.render('program', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});




App.BasketsRoute = App.SubmoduleRoute.extend();

App.BasketsIndexRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.findAll('basket').then(function (baskets) {
      return baskets;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    subNavTo: function (destination) {
      this.transitionTo('basket', destination);
    }
  },
  renderTemplate: function() {
    this.render('baskets.index', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});

App.BasketRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.find('basket', params.basket_id).then(function (basket) {
      return basket;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    navToTrack: function (destination) {
      this.transitionTo('track', destination);
    }
  },
  renderTemplate: function() {
    this.render('basket', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});





App.TracksRoute = App.SubmoduleRoute.extend();

App.TracksIndexRoute = App.TracksRoute.extend({
  model: function(params, transition) {
    return this.store.findAll('track').then(function (tracks) {
      return tracks;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    subNavTo: function (destination) {
      this.transitionTo('track', destination);
    }
  },
  renderTemplate: function() {
    this.render('tracks.index', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});

App.TrackRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.find('track', params.track_id ).then(function (track) {
      return track;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    }
  },
  renderTemplate: function() {
    this.render('track', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});



App.PlanningRoute = Em.Route.extend({
   model: function(params, transition) {
    this.store.fin
    return this.store.find('planning', '2013_09_17_1').then(function (planning) {
      return planning;
    });
  },
  renderTemplate: function() {
    this.render('planning', {
      outlet: 'submodule',
      into: 'module'
    });
  }
});



App.MssiisRoute = App.SubmoduleRoute.extend();

App.MssiisIndexRoute = App.MssiisRoute.extend({
  model: function(params, transition) {
    return this.store.findAll('mssii').then(function (mssiis) {
      return mssiis;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    subNavTo: function (destination) {
      this.transitionTo('mssii', destination);
    }
  },
  renderTemplate: function() {
    this.render('mssiis.index', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});

App.MssiiRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.find('mssii', params.mssii_id ).then(function (mssii) {
      return mssii;
    });
  },
  afterModel: function(model){
    var self = this;
    var mssiiLinesController = this.controllerFor('mssiiLines');
    mssiiLinesController.set('content', model.get('mssiiLines'));
    this.store.findAll('adsTrack').then(function (adsTracks) {
      self.controllerFor('adsTracksIndex').set('content', adsTracks);
    });
  },
  actions: {
    error: function() {
      this.transitionTo('ads');
    }
  },
  renderTemplate: function() {
    this.render('mssii', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});


App.AdsTracksRoute = App.SubmoduleRoute.extend();

App.AdsTracksIndexRoute = App.TracksRoute.extend({
  model: function(params, transition) {
    return this.store.findAll('adsTrack').then(function (adsTracks) {
      return adsTracks;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    subNavTo: function (destination) {
      this.transitionTo('adsTrack', destination);
    }
  },
  renderTemplate: function() {
    this.render('adsTracks.index', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});

App.AdsTrackRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.find('adsTrack', params.adsTrack_id ).then(function (adsTrack) {
      return adsTrack;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    }
  },
  renderTemplate: function() {
    this.render('adsTrack', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});
