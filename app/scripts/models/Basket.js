App.Basket = DS.Model.extend({
  name: DS.attr('string'),
  tracks: DS.hasMany('track', {async: true})
});
