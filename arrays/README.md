# 🚀 JavaScript Array Methods Challenge

Welcome to the **JavaScript Array Methods Challenge!** 🧠  
This challenge is designed to help you practice various array methods such as `map()`, `forEach()`, `filter()`, `find()`, `includes()`, `slice()`, `push()`, and `pop()`.

---

## 📌 Challenge Tasks
Each task requires using a specific JavaScript array method.

### ✅ 1. `map()`
**Task:** Create a new array that doubles each number.  
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

### ✅ 2. `forEach()`
**Task:** Print each item with the message: `"This is X"`  
```js
const fruits = ['🍎', '🍌', '🍓'];
fruits.forEach(item => console.log(`This is ${item}`));
```

### ✅ 3. `filter()`
**Task:** Extract numbers greater than `10`.  
```js
const numbers = [5, 12, 8, 21];
const filtered = numbers.filter(num => num > 10);
console.log(filtered); // [12, 21]
```

### ✅ 4. `find()`
**Task:** Find the banana fruit in the array.
```js
const fruits = ['🍎', '🍌', '🍓', '🍍'];
const foundFruit = fruits.find(item => item === '🍌');
console.log(foundFruit); // '🍌'
```

### ✅ 5. `includes()`
**Task:** Check if the array contains the apple emoji (`🍎`).
```js
const fruits = ['🍎', '🍌', '🍓'];
console.log(fruits.includes('🍎')); // true
```

### ✅ 6. `slice()`
**Task:** Create a new array containing only the first two elements of the original array.
```js
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(0, 2);
console.log(slicedNumbers); // [1, 2]
```

### ✅ 7. `push()`
**Task:** Add a watermelon emoji (`🍉`) to the end of the array.
```js
const fruits = ['🍎', '🍌'];
fruits.push('🍉');
console.log(fruits); // ['🍎', '🍌', '🍉']
```

### ✅ 8. `pop()`
**Task:** Remove the last element from the array.
```js
fruits.pop();
console.log(fruits); // ['🍎', '🍌']
```

---

## 🚀 Getting Started

### 📥 Installation
To run this challenge, you can simply copy and paste the code into your browser's console or a JavaScript file.

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/array-methods-challenge.git
   cd array-methods-challenge
   ```

2. Open `index.html` in your browser.

---

## 🛠 Contributing
If you want to improve this challenge or add new challenges, feel free to fork and create a pull request. 🚀

---

## 📜 License
This project is licensed under the MIT License.
