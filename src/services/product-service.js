import env from "../config/env";
import api from "../util/api";

const { baseUrl } = env;

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

/**
 * @return {any}
 */
export function getRecentlyViewed() {
  return api.get(
    `${baseUrl}/customers/products/recently-viewed?limit=3&page=1`
  );
}

/**
 * @param {string} id
 * @return {any}
 */
export function updateRecentlyViewed(id) {
  return api.put(`${baseUrl}/customers/products/recently-viewed/${id}`);
}
