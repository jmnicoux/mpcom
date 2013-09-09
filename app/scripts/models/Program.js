App.Program = DS.Model.extend({
  name: DS.attr('string'),
  prgLines: DS.hasMany('prgLine', {async: true})
});

App.PrgLine = DS.Model.extend({
  properties: DS.attr('string'),
  basketName: DS.attr('string'),
  basket: DS.hasMany('basket', {async: true})
});
