export default class AppStorage{
    /**
     * 
     * @param {string} key 
     */
    static get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    /**
     * 
     * @param {string} key 
     * @param {any} value 
     */
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}