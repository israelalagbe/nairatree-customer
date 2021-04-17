import env from "../config/env";
import api from "../util/api";

const {
    baseUrl
} = env;

/**
 * @return {any}
 */
export function getCarts() {
    return api.get(`${baseUrl}/customers/cart/get`);
}


/**
 * @return {any}
 */
export function saveCart(carts) {
    return api.post(`${baseUrl}/customers/cart/add`, {
        products: carts
    });
}