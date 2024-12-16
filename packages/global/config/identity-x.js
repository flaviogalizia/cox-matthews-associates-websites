const IdentityXConfiguration = require('@mindful-web/marko-web-identity-x/config');
const { get } = require('@mindful-web/object-path');
const newrelic = require('newrelic');

const { log } = console;

module.exports = ({
  appId = '60b7b2bd1245f46d03e69e1d',
  apiToken = process.env.IDENTITYX_API_TOKEN,
  hiddenFields = [],
  requiredServerFields = [
    'givenName',
    'familyName',
    'organization',
  ],
  requiredClientFields = [
    // 'regionCode',
    // 'countryCode',
    // 'postalCode',
  ],
  requiredCreateFields = [],
  recommendedQuestionId,
  answerToQueryParamsMap,
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    requiredCreateFields,
    recommendedQuestionId,
    answerToQueryParamsMap,
    onHookError: (e) => {
      if (process.env.NODE_ENV === 'development') {
        log('ERROR IN IDENTITY-X HOOK', e);
        if (e.networkError) log('Network Error', get(e, 'networkError.result.errors.0'));
      }
      newrelic.noticeError(e);
    },
    ...rest,
  });
  return config;
};
