// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    'nuxt-quasar-ui'
  ],
  app: {
    baseURL: '/media-dashboard/', //https://github.com/AdigaGhojah/media-dashboard
    head:{
      script: [
        {
            type: 'text/javascript',
            src: '/assets/js/particles.min.js',
            body: true
        },
    ]
    }
  },
  css: ['/app.css'],
})
