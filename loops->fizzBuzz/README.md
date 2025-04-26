# 🎯 FizzBuzz Challenge

This repository contains a simple **FizzBuzz** implementation using JavaScript and HTML.

## 📜 Description
The **FizzBuzz** problem is a common coding challenge where:
- Numbers divisible by **3** print "Fizz".
- Numbers divisible by **5** print "Buzz".
- Numbers divisible by both **3 and 5** print "FizzBuzz".
- Otherwise, the number is printed as-is.

This solution runs in the browser and logs the results in the console.

## 🚀 How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/Enver-Onur-Cogalan/FizzBuzz-Challenge.git
   ```
2. Open the `index.html` file in any browser.
3. Open the browser console (`F12` or `Right Click > Inspect > Console`).
4. See the FizzBuzz results printed in the console.

## 📄 Code Overview
The implementation is written inside the `<script>` tag in the `index.html` file:
```html
<script>
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i, 'Fizz');
        }
        if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i, 'Buzz');
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'FizzBuzz');
        }
    }
</script>
```

## 🛠 Improvements
- Display results directly on the webpage instead of the console.
- Add a user input field to run FizzBuzz dynamically.

## 📌 License
This project is open-source and available under the **MIT License**.

---

**Author:** [Enver Onur Çoğalan](https://github.com/Enver-Onur-Cogalan)
