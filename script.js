// JavaScript DOM Documentation Demo

// 1. Selecting elements with querySelector()
const title = document.querySelector('#title');
const intro = document.querySelector('#intro');
const changeTextButton = document.querySelector('#changeTextButton');

// 2. Changing textContent when a button is clicked
changeTextButton.addEventListener('click', () => {
  title.textContent = 'DOM Manipulation in Action';
  intro.textContent = 'JavaScript has changed the content of this page through the DOM.';
});

// 3. Changing classes and CSS
const styleBox = document.querySelector('#styleBox');
const toggleStyleButton = document.querySelector('#toggleStyleButton');

toggleStyleButton.addEventListener('click', () => {
  styleBox.classList.toggle('active');
});

// 4. Updating an element dynamically with a counter
let count = 0;
const countText = document.querySelector('#count');
const increaseButton = document.querySelector('#increaseButton');
const decreaseButton = document.querySelector('#decreaseButton');

function updateCounter() {
  countText.textContent = count;
}

increaseButton.addEventListener('click', () => {
  count += 1;
  updateCounter();
});

decreaseButton.addEventListener('click', () => {
  count -= 1;
  updateCounter();
});

// 5. Creating and removing DOM elements
const itemContainer = document.querySelector('#itemContainer');
const addItemButton = document.querySelector('#addItemButton');
const removeItemButton = document.querySelector('#removeItemButton');
let itemNumber = 0;

addItemButton.addEventListener('click', () => {
  itemNumber += 1;

  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = `Dynamic item ${itemNumber}`;

  itemContainer.append(item);
});

removeItemButton.addEventListener('click', () => {
  const lastItem = itemContainer.lastElementChild;

  if (lastItem) {
    lastItem.remove();
  }
});

// 6. Form event and preventDefault()
const userForm = document.querySelector('#userForm');
const nameInput = document.querySelector('#name');
const formMessage = document.querySelector('#formMessage');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  formMessage.textContent = `Hello, ${name}! The form was handled using JavaScript.`;
});

// 7. Callback function example
const callbackMessage = document.querySelector('#callbackMessage');
const callbackButton = document.querySelector('#callbackButton');

function greetUser(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}

callbackButton.addEventListener('click', () => {
  greetUser('Developer', (message) => {
    callbackMessage.textContent = `${message} This was triggered by a callback function.`;
  });
});

// 8. DOM traversal example
const domInfo = document.querySelector('#domInfo');
console.log('Parent element:', domInfo.parentElement);
console.log('Child elements:', domInfo.children);
console.log('First child:', domInfo.firstElementChild);
console.log('Last child:', domInfo.lastElementChild);
