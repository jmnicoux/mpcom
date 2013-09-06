App.LoadingRoute = Em.Route.extend({
  renderTemplate: function(e) {
    console.log(e);
    this.render("application");
    this.render("loading", { outlet: "loading", into: "application" });
  }
});
