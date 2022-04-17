import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
  }
  interface RuntimeConfig {
     public: any,

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },
  }
}