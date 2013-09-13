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
  prgLines: DS.hasMany('prgLine', {async: true}),
  lastEdit: DS.attr('date')
});

App.PrgLine = DS.Model.extend({
  basket: DS.belongsTo('basket'),
  properties: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  startValidity: DS.attr('string'),
  endValidity: DS.attr('string'),
  Mon: DS.attr('boolean'),
  Tue: DS.attr('boolean'),
  Wed: DS.attr('boolean'),
  Thu: DS.attr('boolean'),
  Fri: DS.attr('boolean'),
  Sat: DS.attr('boolean'),
  Sun: DS.attr('boolean'),
  frq: DS.attr('number')
});

App.Basket = DS.Model.extend({
  name: DS.attr('string'),
  tracks: DS.hasMany('track', {async: true}),
  lastEdit: DS.attr('date')
});

App.Track = DS.Model.extend({
  album: DS.attr('string'),
  artist: DS.attr('string'),
  name: DS.attr('string'),
  label: DS.attr('string'),
  year: DS.attr('string'),
  duration: DS.attr('string'),
  lastEdit: DS.attr('date'),
  consistency: DS.attr('boolean') //basket length match track's size on hdd +/-x%
});




//ads

App.AdsTrack = DS.Model.extend({
  name: DS.attr('string'),
  duration: DS.attr('string'),
  lastEdit: DS.attr('date'),
  mssiis: DS.hasMany('mssii')
});


App.Mssii = DS.Model.extend({
  name: DS.attr('string'),
  zone: DS.attr('string'),
  type: DS.attr('string'),
  lastEdit: DS.attr('date')
});

