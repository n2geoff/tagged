/**
 * Creates new DOM element(s) from tag name(s) and attributes
 *
 * @param {string} tag  - tag to create
 * @param {...any} args - attributes and/or child tag elements
 *
 * @returns {HTMLElement} The created DOM element(s)
 */
export default function tag(tag, ...args) {
    const el = document.createElement(tag);

    args.forEach((arg) => {
        if (typeof arg === "string" || typeof arg === "number") {
            el.appendChild(document.createTextNode(arg));
        } else if (Array.isArray(arg)) {
            el.append(...arg);
        } else {
            Object.assign(el, arg);
        }
    });

    return el;
}