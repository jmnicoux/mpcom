App.Music = DS.Model.extend({
  name: DS.attr('string'),
  components: ["test", "test2"]
  /*
  programs: DS.hasMany('program', {async: true}),
  baskets: DS.hasMany('basket', {async: true}),
  tracks: DS.hasMany('track', {async: true})
  */
});
