// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/icon', '@nuxt/ui-pro'],
  
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
      baseUrl:process.env.BASE_URL
    }
  }

  
})