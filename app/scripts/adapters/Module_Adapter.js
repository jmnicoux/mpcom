

App.DowTransform = DS.Transform.extend({
  serialize: function(value) {
    console.log('adapter transform dow (bin)-->', value);
    var binValue = value.get('mon') + value.get('tue') + value.get('wed') + value.get('thu') + value.get('fri') + value.get('sat') + value.get('sun');
    return parseInt(binValue, 2).toString(16).toUpperCase();
  },
  deserialize: function(hexValue) {
    console.log('adapter transform dow (hex)-->', hexValue);
    var value = parseInt('1'+hexValue,16).toString(2).substring(1);
    return Ember.create({ mon: value[0], tue: value[1], wed: value[2], thu: value[3], fri: value[4], sat: value[5], sun: value[6]});
  }
});


App.ApplicationAdapter = DS.RESTAdapter.extend({
  //namespace: 'api/v1'
});

//App.ModuleAdapter = DS.FixtureAdapter.extend();
//App.SubmoduleAdapter = DS.FixtureAdapter.extend();

/*
App.ProgramAdapter = DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:3000',
  namespace: '/api'
});
*/






//App.PlaylistAdapter = DS.FixtureAdapter.extend();
//App.PlaylistLineAdapter = DS.FixtureAdapter.extend();
//App.PlaylistLineAdapter = DS.RESTAdapter.extend();
//App.ProgramAdapter = DS.FixtureAdapter.extend();
//App.PrgLineAdapter = DS.FixtureAdapter.extend();
//App.BasketAdapter = DS.FixtureAdapter.extend();
//App.BasketAdapter = DS.RESTAdapter.extend();
//App.TrackAdapter = DS.FixtureAdapter.extend();

//App.PlanningAdapter = DS.FixtureAdapter.extend();
//App.PlanningLineAdapter = DS.FixtureAdapter.extend();
//App.MssiiAdapter = DS.FixtureAdapter.extend();
//App.MssiiLineAdapter = DS.FixtureAdapter.extend();
//App.AdsTrackAdapter = DS.FixtureAdapter.extend();

//App.ModuleAdapter = DS.RESTAdapter.extend();
//App.SubmoduleAdapter = DS.RESTAdapter.extend();
//App.ProgramAdapter = DS.RESTAdapter.extend();
