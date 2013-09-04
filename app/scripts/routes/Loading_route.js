App.LoadingRoute = Em.Route.extend({
  renderTemplate: function() {
    this.render("application");
    this.render("loading", { outlet: "loading", into: "application" });
  }
});
