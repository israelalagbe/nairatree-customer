import env from "../config/env";
import api from "../util/api";

const { baseUrl } = env;

/**
 * @return {*}
 */
export function updateProfile(payload) {
  return api.put(`${baseUrl}/customers/profile/update`, payload);
}
