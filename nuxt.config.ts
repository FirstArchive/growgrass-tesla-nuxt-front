// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "demo",
      },
      charset: "utf-8",
      titleTemplate: "%s | growgrassth",
      link: [
        {
          rel: "icon",
          type: "image/jpeg",
          href: "https://img5.pic.in.th/file/secure-sv1/logo122b31bce7af703c.th.jpeg",
        },
      ],
      meta: [
        {
          name: "author",
          content: "Growgrassth Ltd., Thailand",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
      ],
    },
  },
  devtools: { enabled: true },
  ssr: false,
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
