

App.DowTransform = DS.Transform.extend({
  serialize: function(deserialized) {
    var binValue = '',
        iMax = deserialized.length;
    for ( var i=0; i<iMax; i++ ) {
      binValue += ( deserialized[i].active ) ? "1" : "0";
    }
    return parseInt(binValue, 2).toString(16).toUpperCase();
  },
  deserialize: function(serialized) {
    var deserialized = [],
        week = ["M","T","W","T","F","S","S"],
        value = parseInt('1'+serialized,16).toString(2).substring(1),
        iMax=value.length-1;
    for ( var i=0; i<iMax; i++ ) {
      var day = Em.Object.create({
        name: week[i],
        active: ( value[i] !== "0" ) ? true : false
      });
      deserialized.push(day);
    }
    return deserialized;
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
/*

App.MssiiSerializer = DS.RESTSerializer.extend({
  dirtyRecordsForHasManyChange: function(dirtySet, record, relationship) {
    console.log('---->', dirtySet, record, relationship);
  }
});
*/
//App.MssiiLineAdapter = DS.FixtureAdapter.extend();
//App.AdsTrackAdapter = DS.FixtureAdapter.extend();

//App.ModuleAdapter = DS.RESTAdapter.extend();
//App.SubmoduleAdapter = DS.RESTAdapter.extend();
//App.ProgramAdapter = DS.RESTAdapter.extend();
