const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/website-section-page');
const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', newsletterState(), withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
