App.Router.map(function() {

  this.resource('music', function() {
    this.resource('playlist');
    this.resource('programs', function() {
      this.resource('program', { path: '/:program_id' });
    });
    this.resource('baskets', function() {
      this.resource('basket', { path: '/:basket_id' });
    });
    this.resource('tracks', function() {
      this.resource('track', { path: '/:track_id' });
    });
  });

  this.resource('ads', function() {
    this.resource('planning');
    this.resource('mssiis', function() {
      this.resource('mssii', { path: '/:mssii_id' });
    });
    this.resource('adsTracks', function() {
      this.resource('adsTrack', { path: '/:adsTrack_id' });
    });

  });

  this.resource('settings', function() {
    this.resource('eeprom');
    this.resource('network');
    this.resource('date');
    this.resource('misc');
    this.resource('audio');

  });

  this.resource('maintenance', function() {
    this.resource('diagnostic');
    this.resource('update');
  });

  this.resource('help', function() {
    this.resource('docs');
    this.resource('contacts');
  });

});
