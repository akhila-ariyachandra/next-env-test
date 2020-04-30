const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  // Have to list all the environment variables used here to make it available
  // to the client code
  env: {
    TEST_ENV: process.env.TEST_ENV,
  },
};
