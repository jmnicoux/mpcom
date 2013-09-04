/*global moment*/
var Em = Ember;
var App = window.App = Ember.Application.create();

// Model

App.Submodule = DS.Model.extend({
  name: DS.attr('string')
});

App.Module = DS.Model.extend({
    name: DS.attr('string'),
    submodules: DS.hasMany('submodule', {async: true})
});

App.Router.map(function() {
  this.resource('module', { path: '/:module_id' }, function() {
    this.resource('submodule', { path: '/:submodule_id' });
  });
});



App.ApplicationController = Em.ArrayController.extend();
App.ModuleController = Em.ObjectController.extend();
App.SubmoduleController = Em.ObjectController.extend();



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

App.LoadingRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render("application");
    this.render("loading", { outlet: "loading", into: "application" });
  }
});

App.ModuleAdapter = DS.FixtureAdapter.extend();
App.SubmoduleAdapter = DS.FixtureAdapter.extend();

App.Module.FIXTURES = [
  {
    "id": "music",
    "name": "Music",
    "submodules": ["programs", "baskets", "tracks"]
  }, {
    "id": "ads",
    "name": "Ads",
    "submodules": ["adverts", "events", "locals", "adcom", "openClose", "allAdsTracks"]
  }, {
    "id": "settings",
    "name": "Settings",
    "submodules": ["eeprom", "date"]
  }, {
    "id": "maintenance",
    "name": "Maintenance",
    "submodules": ["diagnostic", "update"]
  }, {
    "id": "help",
    "name": "Help",
    "submodules": ["doc", "contact"]
  }
];

App.Submodule.FIXTURES = [
  {
    "id": "programs",
    "name": "Programs"
  }, {
    "id": "baskets",
    "name": "Baskets"
  }, {
    "id": "tracks",
    "name": "Tracks"
  }, {
    "id": "adverts",
    "name": "Adverts"
  }, {
    "id": "events",
    "name": "Events"
  }, {
    "id": "locals",
    "name": "Locals"
  }, {
    "id": "adcom",
    "name": "Adcom"
  }, {
    "id": "openClose",
    "name": "Open/close"
  }, {
    "id": "allAdsTracks",
    "name": "All tracks"
  }, {
    "id": "eeprom",
    "name": "Eeprom"
  }, {
    "id": "date",
    "name": "Date"
  }, {
    "id": "diagnostic",
    "name": "Diagnostic"
  }, {
    "id": "update",
    "name": "Update"
  }, {
    "id": "doc",
    "name": "Documentation"
  }, {
    "id": "contact",
    "name": "contact"
  }
];

/* Order and include as you please. */
//require('scripts/controllers/*');
//require('scripts/store');
//require('scripts/models/*');
//require('scripts/routes/*');
//require('scripts/views/*');
//require('scripts/router');
