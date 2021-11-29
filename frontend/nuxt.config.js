export default {
    components: true,
    modules: ['@nuxt/http', '@nuxtjs/proxy'],
    http: {
        proxy: true
    },
    proxy: {
        '/all': { target: 'http://localhost:8080', changeOrigin: true },
        '/country': { target: 'http://localhost:8080', changeOrigin: true },
        '/updategrowth': { target: 'http://localhost:8080', changeOrigin: true },
        '/tick': { target: 'http://localhost:8080', changeOrigin: true },
        '/reset': { target: 'http://localhost:8080', changeOrigin: true }
    }

}