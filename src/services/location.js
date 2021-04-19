import env from "../config/env";
import api from "../util/api";

const { baseUrl } = env;

/**
 * @return {any}
 */
export function getStates() {
  return api.get(`${baseUrl}/customers/countries/states`);
}
