export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "test18",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/direction-control',  // your plugins file name
    // other plugins
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "en",
            dir: "ltr",
            name: "English",

            file: 'en.json',
          },
          {
            code: "ar",
            dir: "rtl", // that will be passed to your app
            name: "عربي",
            file: 'ar.json',
          },
        ],
        defaultLocale: "en",
        langDir: 'translations/',
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
