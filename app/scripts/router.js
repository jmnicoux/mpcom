App.Router.map(function() {
  this.resource('module', { path: '/:module_id' }, function() {

    //music
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

    //ads
    this.resource('planning');
    this.resource('mssiis', function() {
      this.resource('mssii', { path: '/:mssii_id' });
    });
    this.resource('adsTracks', function() {
      this.resource('adsTrack', { path: '/:adsTrack_id' });
    });

    //settings
    this.resource('eeprom');
    this.resource('date')

    //maintenance
    this.resource('diagnostic');
    this.resource('update')

    //help
    this.resource('docs');
    this.resource('contacts')

  });
});
