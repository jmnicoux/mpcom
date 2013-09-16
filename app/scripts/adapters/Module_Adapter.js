App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

App.ModuleAdapter = DS.FixtureAdapter.extend();
App.SubmoduleAdapter = DS.FixtureAdapter.extend();

/*
App.ProgramAdapter = DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:3000',
  namespace: '/api'
});
*/


App.PlaylistAdapter = DS.FixtureAdapter.extend();
App.PlaylistLineAdapter = DS.FixtureAdapter.extend();
//App.PlaylistLineAdapter = DS.RESTAdapter.extend();
App.ProgramAdapter = DS.FixtureAdapter.extend();
App.PrgLineAdapter = DS.FixtureAdapter.extend();
App.BasketAdapter = DS.FixtureAdapter.extend();
//App.BasketAdapter = DS.RESTAdapter.extend();
App.TrackAdapter = DS.FixtureAdapter.extend();

App.MssiiAdapter = DS.FixtureAdapter.extend();
App.AdsTrackAdapter = DS.FixtureAdapter.extend();

//App.ModuleAdapter = DS.RESTAdapter.extend();
//App.SubmoduleAdapter = DS.RESTAdapter.extend();
//App.ProgramAdapter = DS.RESTAdapter.extend();
