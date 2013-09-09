App.ProgramsIndexRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('prgs route', params);
    this.store.findAll('basket');
    this.store.findAll('prgLine');
    return this.store.findAll('program').then(function (programs) {
      return programs;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    subNavTo: function (destination) {
      console.log('(programs) subnav dest', destination);
      this.transitionTo('program', destination);
    }
  }
});

App.ProgramRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('prg route', params);
    return this.store.find('program', params.program_id ).then(function (program) {
      return program;
    });
  },
  actions: {
    error: function() {
      this.transitionTo('index');
    },
    navToBasket: function (destination) {
      this.transitionTo('basket', destination);
    }
  }
});



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
      console.log('(basket) subnav dest', destination);
      this.transitionTo('basket', destination);
    }
  }
});

App.BasketRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('bsk route', params);
    return this.store.find('basket', params.basket_id ).then(function (basket) {
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


App.TracksIndexRoute = Em.Route.extend({

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
      console.log('(track) subnav dest', destination);
      this.transitionTo('track', destination);
    }
  }
});

App.TrackRoute = Em.Route.extend({

  model: function(params, transition) {
    console.log('bsk route', params);
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
