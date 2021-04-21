import env from "../config/env";
import api from "../util/api";

const { baseUrl } = env;

/**
 * @return {any}
 */
export function getProducts(query) {
  return api.get(`${baseUrl}/customers/products/fetch`, {
    params: query
  });
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
    `${baseUrl}/customers/products/recently-viewed?limit=7&page=1`
  );
}

/**
 * @param {string} id
 * @return {any}
 */
export function updateRecentlyViewed(id) {
  return api.put(`${baseUrl}/customers/products/recently-viewed/${id}`);
}
