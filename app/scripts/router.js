App.Router.map(function() {
  this.resource('music', function() {
    this.resource('programs', function() {
      this.resource('program', { path: ':program_id' });
    });
    this.resource('baskets', function() {
      this.resource('basket', { path: '/:basket_id' });
    });
    this.resource('tracks', function() {
      this.resource('track', { path: '/:track_id' });
    });
  });
  this.resource('ads', function() {
    this.resource('adverts', function() {
      this.resource('advert', { path: '/:advert_id' });
    });
    this.resource('events', function() {
      this.resource('event', { path: '/:event_id' });
    });
    this.resource('adtracks', function() {
      this.resource('adtrack', { path: '/:track_id' });
    });
  });
  this.resource('settings', function() {
    this.resource('eeproms', function() {
      this.resource('eeprom', { path: '/:eeprom_id' });
    });
    this.resource('date');
  });
  this.resource('maintenance', function() {
    this.resource('dignostics', function() {
      this.resource('dignostic', { path: '/:diagnostic_id' });
    });
    this.resource('update');
  });
  this.resource('help', function() {
    this.resource('docs', function() {
      this.resource('doc', { path: '/:doc_id' });
    });
    this.resource('contacts');
  });
});
