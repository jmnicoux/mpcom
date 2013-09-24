

App.DowTransform = DS.Transform.extend({
  serialize: function(deserialized) {
    var binValue = '',
        iMax = deserialized.length;
    for ( var i=0; i<iMax; i++ ) {
      binValue += ( deserialized[i].active ) ? "1" : "0";
    }
    return parseInt(binValue, 2).toString(16).toUpperCase();
  },
  deserialize: function(serialized) {
    var deserialized = [],
        week = ["M","T","W","T","F","S","S"],
        value = parseInt('1'+serialized,16).toString(2).substring(1),
        iMax=value.length-1;
    for ( var i=0; i<iMax; i++ ) {
      var day = Em.Object.create({
        name: week[i],
        active: ( value[i] !== "0" ) ? true : false
      });
      deserialized.push(day);
    }
    return deserialized;
  }
});


App.ApplicationAdapter = DS.RESTAdapter.extend({
  //namespace: 'api/v1'
});
