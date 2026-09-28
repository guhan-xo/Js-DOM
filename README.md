# JavaScript DOM Documentation

## 1. Introduction

The **DOM (Document Object Model)** is a programming interface created by the browser from an HTML document. It represents the page as a tree of objects called nodes.

JavaScript uses the DOM to access, read, change, create, and remove HTML elements and to respond to user interactions.

### Why is the DOM important?

The DOM allows JavaScript to make web pages interactive without requiring the entire page to be reloaded.

Examples:

- Changing text when a button is clicked
- Changing colors or styles dynamically
- Validating forms
- Adding or removing elements
- Showing and hiding content
- Responding to keyboard, mouse, and form events

---

## 2. HTML and the DOM

Consider this HTML:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome to DOM.</p>
    <button>Click Me</button>
  </body>
</html>
```

The browser creates a DOM tree similar to this:

```text
Document
└── html
    └── body
        ├── h1
        ├── p
        └── button
```

In this structure:

- `document` is the root document object.
- `html` is an element node.
- `body` is a child of `html`.
- `h1`, `p`, and `button` are children of `body`.

---

## 3. DOM Nodes

A DOM document contains different kinds of nodes.

### Common node types

1. **Document node** - Represents the complete HTML document.
2. **Element node** - Represents HTML elements such as `<div>`, `<p>`, and `<button>`.
3. **Text node** - Represents text inside an element.
4. **Attribute** - Represents element attributes such as `id`, `class`, and `href`.

---

## 4. Selecting HTML Elements

JavaScript provides several methods to find elements in the DOM.

### 4.1 `getElementById()`

Selects one element using its `id`.

```javascript
const title = document.getElementById('title');
```

### 4.2 `getElementsByClassName()`

Selects elements using a class name.

```javascript
const boxes = document.getElementsByClassName('box');
```

### 4.3 `getElementsByTagName()`

Selects elements using their tag name.

```javascript
const paragraphs = document.getElementsByTagName('p');
```

### 4.4 `querySelector()`

Selects the first element that matches a CSS selector.

```javascript
const title = document.querySelector('#title');
const box = document.querySelector('.box');
```

### 4.5 `querySelectorAll()`

Selects all elements that match a CSS selector.

```javascript
const buttons = document.querySelectorAll('button');
```

---

## 5. Changing Text and HTML

### `textContent`

Changes or reads the text content of an element.

```javascript
const title = document.querySelector('#title');
title.textContent = 'Updated Title';
```

### `innerText`

Gets or sets visible text.

```javascript
paragraph.innerText = 'Updated paragraph';
```

### `innerHTML`

Gets or sets HTML inside an element.

```javascript
content.innerHTML = '<strong>Bold text</strong>';
```

Use `textContent` for plain text whenever possible. `innerHTML` should be used carefully when inserting HTML from untrusted sources.

---

## 6. Changing Attributes

### `getAttribute()`

Reads an attribute.

```javascript
const link = document.querySelector('#link');
const url = link.getAttribute('href');
```

### `setAttribute()`

Creates or changes an attribute.

```javascript
link.setAttribute('href', 'https://developer.mozilla.org/');
```

### `removeAttribute()`

Removes an attribute.

```javascript
link.removeAttribute('target');
```

---

## 7. Changing CSS Styles

JavaScript can modify inline styles.

```javascript
const box = document.querySelector('.box');

box.style.color = 'white';
box.style.backgroundColor = 'black';
box.style.padding = '20px';
```

For larger applications, toggling CSS classes is usually cleaner.

```javascript
box.classList.add('active');
box.classList.remove('active');
box.classList.toggle('active');
```

---

## 8. Creating and Adding Elements

### Create an element

```javascript
const message = document.createElement('p');
message.textContent = 'New paragraph created by JavaScript.';
```

### Add an element

```javascript
document.body.appendChild(message);
```

You can also use `append()`:

```javascript
document.body.append(message);
```

---

## 9. Removing Elements

An element can be removed directly:

```javascript
const item = document.querySelector('.item');
item.remove();
```

---

## 10. DOM Traversal

DOM traversal means moving from one node to another.

### Common properties

```javascript
const element = document.querySelector('.box');

console.log(element.parentElement);
console.log(element.children);
console.log(element.firstElementChild);
console.log(element.lastElementChild);
console.log(element.nextElementSibling);
console.log(element.previousElementSibling);
```

These properties are useful when the required element is easier to locate through its relationship with another element.

---

## 11. DOM Events

Events are actions that happen in the browser, such as clicking a button, typing in a field, moving the mouse, or submitting a form.

### Common events

- `click`
- `dblclick`
- `mouseover`
- `mouseout`
- `keydown`
- `keyup`
- `input`
- `change`
- `submit`

### `addEventListener()`

The recommended way to react to events is `addEventListener()`.

```javascript
const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

---

## 12. Forms and the DOM

JavaScript can read form values and respond to form submission.

```javascript
const form = document.querySelector('#userForm');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(nameInput.value);
});
```

`event.preventDefault()` stops the browser's default form submission behavior.

---

## 13. Creating a Practical DOM Application

A simple counter demonstrates several DOM concepts together.

```javascript
let count = 0;

const countText = document.querySelector('#count');
const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');

increaseButton.addEventListener('click', () => {
  count++;
  countText.textContent = count;
});

decreaseButton.addEventListener('click', () => {
  count--;
  countText.textContent = count;
});
```

This example demonstrates:

- Selecting elements
- Storing state in JavaScript
- Handling click events
- Updating text dynamically

---

## 14. DOMContentLoaded

JavaScript should interact with elements after the HTML has been parsed.

One common approach is:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // DOM-related code
});
```

If a script is loaded with `defer`, the browser also waits to execute the script until the HTML has been parsed.

```html
<script src="script.js" defer></script>
```

---

## 15. Event Bubbling and Event Delegation

Events normally propagate from the target element through its ancestors. This is called **event bubbling**.

Example:

```javascript
const list = document.querySelector('#list');

list.addEventListener('click', (event) => {
  if (event.target.matches('.item')) {
    console.log('Item clicked:', event.target.textContent);
  }
});
```

This technique is called **event delegation**. It is useful when many similar elements exist or when elements are created dynamically.

---

## 16. Difference Between HTML and DOM

| HTML | DOM |
|---|---|
| Markup written by the developer | Object representation created by the browser |
| Describes the structure of the page | Represents the current page structure/state |
| Usually stored as source text | Can be modified at runtime |
| Uses HTML syntax | Exposed through JavaScript APIs |

Example:

```html
<h1>Hello</h1>
```

JavaScript can change the DOM to:

```html
<h1>Hello KJ</h1>
```

without rewriting the original HTML file on disk.

---

## 17. Best Practices

1. Prefer `querySelector()` and `querySelectorAll()` when CSS selectors are convenient.
2. Use `textContent` for plain text.
3. Be careful with `innerHTML` when content may come from users or external sources.
4. Use `addEventListener()` for events instead of inline HTML event handlers.
5. Prefer CSS classes over large amounts of inline style manipulation.
6. Keep DOM queries and event-handling logic organized.
7. Use `defer` or appropriate script placement so the DOM is available when scripts execute.

---

## 18. Conclusion

The DOM is the bridge between HTML and JavaScript. It allows JavaScript to interact with the structure and content of a web page, listen for user actions, and update the page dynamically.

Understanding DOM manipulation is a fundamental skill for frontend development and is also useful when working with browser-based automation, interactive interfaces, and web applications.

---

## References

- MDN Web Docs: Document Object Model (DOM) - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- MDN Web Docs: Document - https://developer.mozilla.org/en-US/docs/Web/API/Document
- MDN Web Docs: EventTarget.addEventListener() - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
