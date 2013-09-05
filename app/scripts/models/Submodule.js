App.Submodule = DS.Model.extend({
  name: DS.attr('string'),
  elements: DS.hasMany('element', {async: true})
});
