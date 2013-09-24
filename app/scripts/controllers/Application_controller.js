/*globals Em, $*/

App.ApplicationController = Em.ArrayController.extend({
  needs: ["modules"],
  modules: Em.computed.alias("controllers.modules"),
});

App.ModulesController = Em.ArrayController.extend();

App.ModuleController = Em.ObjectController.extend({
  needs: ["submodules"],
  submodules: Em.computed.alias("controllers.submodules"),
});

App.MusicController = App.ModuleController.extend();
App.AdsController = App.ModuleController.extend();

App.SubmodulesController = Em.ArrayController.extend();

App.MssiiController = Em.ObjectController.extend({
  needs: ["mssiiLines"],
  mssiiLines: Em.computed.alias("controllers.mssiiLines"),
  actions: {
    edit: function (){
      this.set('isEditing', true);
      $('.datepicker').datepicker({format: "YYYY/MM/DD"});
    },
    save: function(mssii) {
      this.set('isEditing', false);
      mssii.get('mssiiLines').invoke('save');
      mssii.save();
    },
    toggleState: function (elt) {
      if ( this.get('isEditing') ) {
        elt.set('active', !elt.get('active') );
      }
    }
  }

});

App.MssiiLinesController = Em.ArrayController.extend();
App.AdsTracksIndexController = Em.ArrayController.extend();
