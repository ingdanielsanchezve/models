// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'https://ingdanielsanchezve.github.io/data',
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '@/assets/css/styles.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})
