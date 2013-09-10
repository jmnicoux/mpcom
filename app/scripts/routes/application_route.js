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

/*
App.PlaylistRoute = Em.Route.extend({
  model: function(params, transition) {
    return this.store.find('playlist').then(function (playlists) {
      return playlists;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    }
  }
});
*/


App.ProgramsRoute = Em.Route.extend({
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
  }
});

App.ProgramsIndexRoute = App.ProgramsRoute.extend();

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
  }
});


App.BasketsRoute = Em.Route.extend({
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
  }
});

App.BasketsIndexRoute = App.BasketsRoute.extend();

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
  }
});


App.TracksRoute = Em.Route.extend({
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
  }
});

App.TracksIndexRoute = App.TracksRoute.extend();

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
  }
});



App.MssiisRoute = Em.Route.extend({
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
  }
});

App.MssiisIndexRoute = App.MssiisRoute.extend();

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
  }
});
