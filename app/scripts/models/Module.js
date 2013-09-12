App.Module = DS.Model.extend({
    name: DS.attr('string'),
    submodules: DS.hasMany('submodule', {async: true})
});

App.Submodule = DS.Model.extend({
  name: DS.attr('string')
});


//music

App.Playlist = DS.Model.extend({
  playlistLines: DS.hasMany('playlistLine', {async: true})
});

App.PlaylistLine = DS.Model.extend({
  type: DS.attr('string'),
  basket: DS.belongsTo('basket'),
  artist: DS.attr('string'),
  track: DS.belongsTo('track'),
  //adsTrack: DS.belongsTo('adsTrack', {async: true}),
  //mssii: DS.belongsTo('mssii'),
  date: DS.attr('date')
});

App.Program = DS.Model.extend({
  name: DS.attr('string'),
  prgLines: DS.hasMany('prgLine', {async: true})
});

App.PrgLine = DS.Model.extend({
  properties: DS.attr('string'),
  basketName: DS.attr('string'),
  basket: DS.hasMany('basket', {async: true})
});

App.Basket = DS.Model.extend({
  name: DS.attr('string'),
  tracks: DS.hasMany('track', {async: true})
});

App.Track = DS.Model.extend({
  name: DS.attr('string')
});

App.AdsTrack = DS.Model.extend({
  name: DS.attr('string')
});


//ads

App.Mssii = DS.Model.extend({
  name: DS.attr('string')
});

App.AdsTrack = DS.Model.extend({
  name: DS.attr('string')
});
