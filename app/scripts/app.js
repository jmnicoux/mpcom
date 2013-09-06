var App = window.App = Em.Application.create({
   //LOG_TRANSITIONS: true
});

Ember.Handlebars.helper('dynPartial', function(name, options) {
  return Ember.Handlebars.helpers.partial.apply(this, arguments);
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
