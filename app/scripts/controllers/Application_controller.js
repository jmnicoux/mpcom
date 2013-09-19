App.ApplicationController = Em.ArrayController.extend();


App.MssiiController = Em.ObjectController.extend({
  //needs: "mssiiLines",
  //mssiiLines: Ember.computed.alias("controllers.mssiiLines"),

  actions: {
    toggleState: function (day) {
      day.set('active', !day.get('active') );
    }
  },
});

//App.MssiiLinesController = Em.ArrayController.extend();
