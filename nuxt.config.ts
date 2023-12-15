// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "vue3-carousel-nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  css: ["/layouts/global.css"],
  colorMode: {
    preference: "light",
  },
  app: {
    pageTransition: { name: "slide-top", mode: "out-in" },
    layoutTransition: false,
  },
});
