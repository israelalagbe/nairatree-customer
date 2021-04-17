import env from "../config/env";
import api from "../util/api";

const {
    baseUrl
} = env;

/**
 * @return {any}
 */
export function getProducts() {
    return api.get(`${baseUrl}/customers/products/fetch`, {});
}

/**
 * @return {any}
 */
export function getTrendingProducts() {
    return api.get(`${baseUrl}/customers/products/trending`, {});
}

/**
 * @return {any}
 */
export function getDealOfTheDay() {
    return api.get(`${baseUrl}/customers/products/deal-of-the-day`, {});
}

/**
 * @param {string} id
 * @return {any}
 */
export function getProduct(id) {
    return api.get(`${baseUrl}/customers/products/single/${id}`);
}