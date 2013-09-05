App.Router.map(function() {
  this.resource('module', { path: '/:module_id' }, function() {
  	this.resource('submodule', { path: '/:submodule_id' }, function() {
      this.resource('element', { path: '/:element_id' });
	  });
  });
});
