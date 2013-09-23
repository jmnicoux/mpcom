require('bower_components/moment/moment');
require('bower_components/MomentDatepicker/moment-datepicker/moment-datepicker');
require('bower_components/ember-data-shim/ember-data-canary-build');

var App = window.App = Em.Application.create({
   LOG_TRANSITIONS: true,
   LOG_TRANSITIONS_INTERNAL: true
});

Ember.RSVP.configure('onerror', function(e) {
  console.log('error message : ', e.message);
  console.log('error stack : ', e.stack);
  console.log('error full  : ', e);
});

App.MomentDate = Ember.Component.extend();

Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).format('YYYY/MM/DD');
});
Ember.Handlebars.registerBoundHelper('time', function(date) {
  return moment(date).format('HH:mm');
});
Ember.Handlebars.registerBoundHelper('dateTime', function(date) {
  return moment(date).format('YYYY/MM/DD HH:mm');
});

require('scripts/models/*');
require('scripts/fixtures/*');
require('scripts/views/*');
require('scripts/controllers/*');
require('scripts/routes/*');
require('scripts/adapters/*');
require('scripts/router');
