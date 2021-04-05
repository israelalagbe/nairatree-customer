/**
 *
 * @param {string} filename
 * @param {any} text
 */
export default function download(filename, text, mime='data:text/csv;charset=utf-8,') {
  var element = document.createElement('a');
  element.setAttribute('href', mime + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
