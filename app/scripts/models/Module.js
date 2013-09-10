App.Module = DS.Model.extend({
    name: DS.attr('string'),
    submodules: DS.hasMany('submodule', {async: true})
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
