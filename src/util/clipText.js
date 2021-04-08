/**
 * 
 * @param {string} text 
 * @param {number} maxLength 
 */
export default function clipText(text, maxLength) {
    let result = text ?? '';
    if (result.length > maxLength) {
      result = `${result.substr(0, maxLength - 3)}...`;
    }
    return result;
}