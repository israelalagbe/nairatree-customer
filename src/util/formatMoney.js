/**
 * @param {number|string} value
 */
export default function formatMoney(value, currency = '₦', toFixed=2) {
    return currency + (String(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
