export default {
    head: {
        title: 'Farming Simulator 25 Live Map',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },
    css: ['@/assets/styles/main.css'],
    plugins: [],
    buildModules: [],
    modules: ['@nuxtjs/axios'],
    axios: {
      baseURL: 'http://localhost:3000/api',  // Backend API URL
    },
}  