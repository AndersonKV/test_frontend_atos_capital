export function createElementHTML(html, attr, data) {
  const element = document.createElement(html);
  data ? (element.innerText = data) : null;
  attr ? (element.className = attr) : null;
  return element;
}
