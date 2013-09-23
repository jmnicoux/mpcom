App.ApplicationController = Em.ArrayController.extend();


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
