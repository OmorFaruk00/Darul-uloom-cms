require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'stylesheet', id: 'bootstrap-style', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', id: 'font-awesome-style', href: '/css/font-awesome.min.css'},
      {rel: 'stylesheet', id: 'style-style', href: '/css/style.css'},



    ],

    script: [

      {src: '/js/jquery.min.js', defer: true},
      {src: '/js/main.js', defer: true},
      {src: '/js/bootstrap.min.js', defer: true},
      {src: '/js/bootstrap.bundle.min.js', defer: true},



    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [   
  //  '@/assets/css/main.css',
  //  '/css/font-awesome.min.css',


  ],


  plugins: [
    {src: '~/plugins/owl.js', ssr: false},
    {src: '~/plugins/vue-toaster.js', ssr: false},
    {src: '~/plugins/fontawesome.js', ssr: false},
  ],


  components: true,


  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }

  },

  router: {
    middleware: 'auth'
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'https://www.api.darululoom-islamia.org',
        // url: 'http://localhost:8000',
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/login', method: 'post'},
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get'}
        },
      },

    },
     redirect:{
          login: '/',
          logout: '/',
          home:'/app',
        }
  },

 
  axios: {   
    // baseURL: 'http://localhost:8000/api',
    baseURL: 'https://www.api.darululoom-islamia.org/api',

    credentials: true
  },



  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'bootstrap-vue/nuxt',
    'nuxt-sweetalert2',
    '@nuxtjs/dotenv',
  ],




  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}
