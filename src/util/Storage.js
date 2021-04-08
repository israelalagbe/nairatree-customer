export default class Storage{
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
     * @param {*} value 
     */
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}