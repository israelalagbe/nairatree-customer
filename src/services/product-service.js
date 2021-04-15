import env from "../config/env";
import api from "../util/api";

const {
    baseUrl
} = env;

/**
 * @return {*}
 */
export function getProducts() {
    return api.get(`${baseUrl}/customers/products/fetch`, {});
}

/**
 * @return {*}
 */
export function getTrendingProducts() {
    return api.get(`${baseUrl}/customers/products/trending`, {});
}

/**
 * @return {*}
 */
export function getDealOfTheDay() {
    return api.get(`${baseUrl}/customers/products/deal-of-the-day`, {});
}