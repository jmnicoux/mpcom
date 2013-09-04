App.Module = DS.Model.extend({
    name: DS.attr('string'),
    submodules: DS.hasMany('submodule', {async: true})
});
