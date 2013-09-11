App.ApplicationRoute = Em.Route.extend({

  retry : function (promise, retryCallback, nTimes) {
    var self = this;
    return promise.then(null, function(reason) {
      if (nTimes-- > 0) {
        return self.retry(retryCallback(), retryCallback, nTimes);
      }
      throw reason;
    });
  },

  getModules: function () {
    //console.log('loading modules');
    return this.store.find('module').then(function (modules) {
      return modules;
    });
  },

  model: function() {
    //var self = this; return new Ember.RSVP.Promise(function(resolve) { Em.run.later(function() { resolve( self.store.find('module') );}, 5000); });
    /*
    return this.store.find('module').then(function (modules) {
      return modules;
    });
    */
    var self = this;
    //return this.retry(self.getModules(), function () {
      return self.getModules();
    //}, 3);
    //return this.getModules();
  },

  actions: {
    error: function() {
      this.transitionTo('index');
    }
  },

  renderTemplate: function() {
    this.render('application');
  }

});



App.ModuleRoute = Em.Route.extend({

  retry : function (promise, retryCallback, nTimes) {
    var self = this;
    return promise.then(null, function(reason) {
      if (nTimes-- > 0) {
        return self.retry(retryCallback(), retryCallback, nTimes);
      }
      throw reason;
    });
  },
  getModule: function (params) {
    return this.store.find('module', params.module_id).then(function (module) {
      return module;
    });
  },
  beforeModel: function(transition) {
    //console.log('module params (before) : ', transition.params);
  },
  model: function(params, transition) {
    //console.log('module params : ', params.module_id);
    var self = this;
    //return this.retry(self.getModule(), function () {
      return self.getModule(params);
    //}, 3);
  },
  afterModel: function(model, transition) {
   //console.log('module params (after) : ', model, transition);
  },
  actions: {
    error: function(e) {
      console.log('error : ', e, e.getMessage(), e.message);
      //this.transitionTo('index');
    }
  },
  renderTemplate: function() {
    this.render('module', {
      outlet: 'main',
      into: 'application'
    });
  }
});


App.SubmoduleRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render('submodule', {
      outlet: 'submodule',
      into: 'module'
    });
  }
});







App.PlaylistRoute = Em.Route.extend({
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
  actions: {
    error: function() {
      this.transitionTo('index');
    }
  },
  renderTemplate: function() {
    this.render('mssii', {
      outlet: 'main',
      into: 'submodule'
    });
  }
});
