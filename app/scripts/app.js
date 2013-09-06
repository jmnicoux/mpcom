var App = window.App = Em.Application.create({
   //LOG_TRANSITIONS: true
});

Ember.Handlebars.helper('dynPartial', function(name, options) {
  return Ember.Handlebars.helpers.partial.apply(this, arguments);
});

Ember.Handlebars.helper('dynLinkTo', function(name) {
  return Ember.Handlebars.helpers.linkTo.apply(this, arguments);
});

Ember.Handlebars.helper('dynView', function(name, options) {
  var newName = 'App.'+name.capitalize()+'View';
  arguments[0] = newName;
  console.log('new!!!', arguments, options);
  return Ember.Handlebars.helpers.view.apply(this, arguments);
});


App.AccordionGroupComponent = Ember.Component.extend({
  classNames: [
    'accordion-group'
  ],
  actions: {
    toggleCollapse: function(e) {
      this.$('.accordion-inner').slideToggle();
    }
  },
  didInsertElement: function() {
    this.$('.accordion-inner').hide();
    //console.log('!!!', this, this.templateName );
  }
});

require('scripts/models/*');
require('scripts/fixtures/*');
require('scripts/views/*');
require('scripts/controllers/*');
require('scripts/routes/*');
require('scripts/adapters/*');
require('scripts/router');
