/**
 * @param {number|string} value
 */
export default (value, currency = '₦', toFixed=2) => currency + (String(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
