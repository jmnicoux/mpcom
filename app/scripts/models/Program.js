App.Program = DS.Model.extend({
  name: DS.attr('string'),
  baskets: DS.hasMany('basket', {async: true})
});
