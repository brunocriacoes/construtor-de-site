export default {
    set data(data) {
        let cache = this.construtor
        cache = { ...cache, ...data }
        localStorage.setItem('CACHE_CONSTRUCTOR', JSON.stringify(cache))
    },
    get data() {
        return JSON.parse(localStorage.getItem('CACHE_CONSTRUCTOR') || '{}')
    },
}