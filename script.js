// ====================
// Part 1: Variables & Conditionals
// ====================
const checkBtn = document.getElementById('checkNumber');
checkBtn.addEventListener('click', () => {
  const num = Number(document.getElementById('userNumber').value);
  const result = document.getElementById('numberResult');

  if (isNaN(num)) {
    result.textContent = "Please enter a valid number.";
  } else if (num > 10) {
    result.textContent = "Your number is greater than 10!";
  } else {
    result.textContent = "Your number is 10 or less.";
  }
});

// ====================
// Part 2: Functions
// ====================
// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Function 2: Square a number
function squareNumber(n) {
  return n * n;
}

const greetBtn = document.getElementById('greetBtn');
greetBtn.addEventListener('click', () => {
  const greeting = greetUser("Student");
  document.getElementById('greetResult').textContent = greeting;
});

// ====================
// Part 3: Loops
// ====================
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const listBtn = document.getElementById('listFruits');

listBtn.addEventListener('click', () => {
  const ul = document.getElementById('fruitList');
  ul.innerHTML = ""; // clear previous list

  // Loop 1: For loop
  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement('li');
    li.textContent = fruits[i];
    ul.appendChild(li);
  }

  // Loop 2: forEach loop (example, optional)
  // fruits.forEach(fruit => {
  //   const li = document.createElement('li');
  //   li.textContent = fruit;
  //   ul.appendChild(li);
  // });
});

// ====================
// Part 4: DOM Interaction
// ====================
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
