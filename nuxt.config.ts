// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/ui', '@pinia/nuxt'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  image: {
    format: ['webp'],
    provider: 'ipx',
  },

  alias: {
    '@types': '/types',
  },

  runtimeConfig: {
    public:{
      baseUrl:"https://mamaclare.org/api"
    }
  }

  
})