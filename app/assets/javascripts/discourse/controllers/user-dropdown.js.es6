export default Ember.ArrayController.extend(Discourse.HasCurrentUser, {
  showAdminLinks: Em.computed.alias("currentUser.staff"),

  actions: {
    logout: function() {
      if(Discourse.SiteSettings.qplum_integration) {
        window.location = Discourse.getURL(Discourse.SiteSettings.qplum_logout_url);
        return false;
      } else {
        Discourse.logout();
        return false;
      }
    }
  }
});
