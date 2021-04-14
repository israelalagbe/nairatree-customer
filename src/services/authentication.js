import env from "../config/env";
import api from "../util/api";

const { baseUrl } = env;

/**
 * @return {*}
 */
export function register(payload) {
  return api.post(`${baseUrl}/customers/auth/register`, payload);
}

/**
 * @return {any}
 */
export function login(payload) {
  return api.post(
    `${baseUrl}/customers/auth/login
  `,
    payload
  );
}

/**
 * @return {any}
 */
export function forgotPassword(payload) {
  return api.post(`${baseUrl}/customers/auth/forgot-password`, payload);
}

/**
 * @return {any}
 */
export function verifyOtp(payload) {
  return api.post(`${baseUrl}/customers/auth/reset-password`, payload);
}

/**
 * @return {any}
 */
export function resetPassword(payload) {
  return api.post(
    `${baseUrl}/customers/auth/update-password
  `,
    payload
  );
}
