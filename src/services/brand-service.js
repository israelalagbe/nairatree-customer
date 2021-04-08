import env from "../config/env";
import api from "../util/api";

const {
    baseUrl
} = env;

/**
 * @return {*}
 */
export function getBrands() {
    return api.get(`${baseUrl}/customers/brands/all`, {
        
    });
}

/**
 * @return {*}
 */
export function getPopularBrands() {
    return api.get(`${baseUrl}/customers/brands/popular`, {
        
    });
}