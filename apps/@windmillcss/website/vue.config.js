module.exports = {
  lintOnSave: false,
  pluginOptions: {
    envValidator: {
      schema: {
        VUE_APP_FIREBASE_PROJECT_ID: {
          type: String,
          required: true,
        },
        VUE_APP_ALGOLIA_APP_ID: {
          type: String,
          required: true,
        },
        VUE_APP_ALGOLIA_API_KEY: {
          type: String,
          required: true,
        },
      },
    },
  },
};
