// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { resolve } from 'path'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    '@nuxtjs/tailwindcss',
    "@nuxtjs/color-mode",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config:any) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    }
  ],
    pinia: {
    storesDirs: ['./stores/**'],
  },
  
  imports: {
    dirs: ["./stores"],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  fonts: {
    families: [
      {
        name: "Roboto",
        global: true,
        provider: "google",
        fallbacks: ["Arial"],
      },
    ],
    defaults: {
      weights: [400, 500, 700],
      styles: ["normal"],
      fallbacks: {
        monospace: ["Tahoma"],
      },
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3001,
  }
});
