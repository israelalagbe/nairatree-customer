import env from "../config/env";
import api from "../util/api";

const { baseUrl } = env;

/**
 * @return {any}
 */
export function saveCheckoutUser(payload) {
  return api.post(`${baseUrl}/customers/checkout/user`, payload);
}

/**
 * @return {any}
 */
export function saveCheckoutGuest(payload) {
  return api.post(`${baseUrl}/customers/checkout/guest`, payload);
}

/**
 * @return {any}
 */
export function updateOrderPaymentStatus(payload) {
  return api.put(`${baseUrl}/customers/checkout/payment/status`, payload);
}

/**
 * @return {any}
 */
export function getOrders() {
  return api.get(`${baseUrl}/customers/orders/user?page=1&limit=2`);
}
