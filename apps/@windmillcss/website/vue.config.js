module.exports = {
  lintOnSave: false,
  pluginOptions: {
    envValidator: {
      schema: {
        VUE_APP_FIREBASE_PROJECT_ID: {
          type: String,
          required: true,
        },
      },
    },
  },
};
