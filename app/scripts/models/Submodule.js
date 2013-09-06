App.Submodule = DS.Model.extend({
  name: DS.attr('string'),
  module: DS.belongsTo('module'),
  elements: DS.hasMany('element', {async: true})
});
