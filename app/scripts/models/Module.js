App.Module = DS.Model.extend({
    //id: simplified name
    name: DS.attr('string'),
    submodules: DS.hasMany('submodule', {async: true})
});

App.Submodule = DS.Model.extend({
  //id: simplified name
  name: DS.attr('string')
});


//commons
App.Zone = DS.Model.extend({
  //id: zone number       ex: 1
  name: DS.attr('string')
});


//music

App.Playlist = DS.Model.extend({
  //id: date_zoneId             ex: 2013_09_15_1 (=playlist du 15 sept 2013 pour la zone 1)
  playlistLines: DS.hasMany('playlistLine', {async: true}),
  zone: DS.belongsTo('zone'),
  date: DS.attr('date')
});

App.PlaylistLine = DS.Model.extend({
  //id: date_zoneId             ex: 2013_09_15_10_14_1 (=line de 10h14 pour playlist du 15 sept 2013 pour la zone 1)
  type: DS.attr('string'),
  basket: DS.belongsTo('basket'),
  track: DS.belongsTo('track'),
  adsTrack: DS.belongsTo('adsTrack'),
  mssii: DS.belongsTo('mssii'),
  date: DS.attr('date')
});

App.Program = DS.Model.extend({
  //id: simplified program name
  name: DS.attr('string'),
  zone: DS.hasMany('zone'),
  prgLines: DS.hasMany('prgLine', {async: true}),
  lastEdit: DS.attr('date')
});

App.PrgLine = DS.Model.extend({
  //id: programId_lineNumber      ex: fake_program_a_12 (=12eme ligne du program avec l'id fake_program_a)
  basket: DS.belongsTo('basket'),
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
  //id: simplified basket name
  name: DS.attr('string'),
  zone: DS.hasMany('zone'),
  tracks: DS.hasMany('track', {async: true}),
  lastEdit: DS.attr('date')
});

App.Track = DS.Model.extend({
  //id: ISRC                    ex: MMFR00000012
  album: DS.attr('string'),
  artist: DS.attr('string'),
  name: DS.attr('string'),
  label: DS.attr('string'),
  year: DS.attr('string'),
  duration: DS.attr('string'),
  zone: DS.hasMany('zone'),
  consistency: DS.attr('boolean'), //basket length match track's size on hdd +/-x%
  lastEdit: DS.attr('date')
});





//ads

App.AdsTrack = DS.Model.extend({
  //id: filename underscored
  name: DS.attr('string'),
  duration: DS.attr('string'),
  mssiis: DS.hasMany('mssii'),
  lastEdit: DS.attr('date')
});

App.MssiiLines = DS.Model.extend({
  //id: mmssii name underscored + _line number  ex: mssii_aut_1_3 (=3eme ligne du fichier mssii.aut.1)
  adsTrack: DS.belongsTo('adsTrack'),


});

App.Mssii = DS.Model.extend({
  //id: mmssii filename underscored     ex: mssii_aut_1
  name: DS.attr('string'),
  type: DS.attr('string'),
  zone: DS.belongsTo('zone'),
  mssiiLines: DS.hasMany('mssiiLine'),
  lastEdit: DS.attr('date')
});

App.Planning = DS.Model.extend({
  //id: date underscored_zone_id        ex: 2013_07_22_1 (=planning du 22/07/2013 pour la zone 1)
  planningLines: DS.hasMany('planningLine'),
  date: DS.attr('date'),
  zone: DS.belongsTo('zone')
});

App.PlanningLine = DS.Model.extend({
  //id: planning id_zone_id             ex: 2013_07_22_1_7 (=7eme ligne du planning du 22/07/2013 pour la zone 1)
  mssii: DS.belongsTo('mssii'),
  adsTrack: DS.belongsTo('adsTrack'),
  date: DS.attr('date')
});
