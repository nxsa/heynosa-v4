// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nosa Onaiwu",
      titleTemplate: "%s",
      meta: [
        {
          name: "description",
          content: "Product Designer and Engineer from Nigeria",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  css: ["~/assets/scss/main.scss"],
});
