const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const { newsletterState } = require('@cox-matthews-associates/package-global/middleware/newsletter-state');
const { asyncRoute, cleanPath } = require('@parameter1/base-cms-utils');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const topWomen = require('../../templates/website-section/awards-honors/top-women');

module.exports = (app) => {
  app.get('/:alias(awards-honors/top-women)', newsletterState(), asyncRoute(async (req, res) => {
    const { alias } = req.params;
    res.redirect(301, `/${cleanPath(alias)}/2023`);
  }));

  app.get('/:alias(awards-honors/top-women/\\d{4})', newsletterState(), withWebsiteSection({
    template: topWomen,
    queryFragment,
  }));
};
