/* jshint node: true */

module.exports = function(environment) {
var ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

  firebase: {
    apiKey: "AIzaSyCArxPf_Ja1LIIiW8KWWJ7lr7XeI368k7Y",
    authDomain: "library-app-434a6.firebaseapp.com",
    databaseURL: "https://library-app-434a6.firebaseio.com",
    storageBucket: "library-app-434a6.appspot.com",
  },


  // if using ember-cli-content-security-policy
  contentSecurityPolicy: {
    'script-src': "'self' 'unsafe-eval' apis.google.com",
    'frame-src': "'self' https://*.firebaseapp.com",
    'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }; 

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
