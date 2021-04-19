import env from "../config/env";
import api from "../util/api";

const {
    baseUrl
} = env;



/**
 * @return {any}
 */
export function saveCheckoutUser(payload) {
    return api.post(`${baseUrl}/customers/checkout/user`, payload);
}

/**
 * @return {any}
 */
export function updateOrderPaymentStatus(payload) {
    return api.put(`${baseUrl}/customers/checkout/payment/status`, payload);
}