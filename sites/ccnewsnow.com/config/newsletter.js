const baseConfig = {
  action: 'https://cma.dragonforms.com/CCNewsNow',
  hiddenInputs: [
    // { name: 'omedasite', value: 'diverse_subscriptions' },
  ],
};

module.exports = {
  signupFooter: {
    ...baseConfig,
    name: 'CCNewsNow e-Newsletter',
    description: 'Connecting you with news and resources related to community colleges.',
  },
  modal: {
    ...baseConfig,
    enabled: false,
    cookieValueToMatch: 1,
    name: 'CCNewsNow e-Newsletter',
    description: 'Connecting you with news and resources related to community colleges.',
  },
};
