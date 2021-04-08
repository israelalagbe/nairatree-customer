import env from "../config/env";
import api from "../util/api";

const {
    baseUrl
} = env;

/**
 * @return {*}
 */
export function getCategories() {
    return api.get(`${baseUrl}/customers/categories/all`, {
        
    });
}