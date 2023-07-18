// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    'nuxt-quasar-ui'
  ],
  app: {
    baseURL: '/media-dashboard/' //https://github.com/AdigaGhojah/media-dashboard
  },
  css: ['/app.css'],
})
