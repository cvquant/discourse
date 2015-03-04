export default Ember.ArrayController.extend({
  showAdminLinks: Em.computed.alias("currentUser.staff"),

  actions: {
    logout() {
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
