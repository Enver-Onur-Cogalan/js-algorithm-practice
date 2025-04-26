# 🧠 Mini Challenge: Date (Date Operations)

This project contains **two different JavaScript functions** that perform operations on given dates.

- **calculateAge()**: Calculates a person's age based on their birth date.
- **isWeekend()**: Checks if a given date falls on a weekend (Saturday or Sunday).

## 🚀 Project Overview

This repository contains solutions for the following two mini challenges:

### ✅ 1. Age Calculation (calculateAge)
**Task:** Write a function that takes a birth date as a parameter and calculates the person's age.

#### **Solution:**
```javascript
function calculateAge(date) {
    // Convert the birth date to a Date object
    let birthDate = new Date(date);
    
    // Get today's date
    let today = new Date();
    
    // Calculate the year difference
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // Check if the birthday has passed this year
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    return age;
}

// Test Cases
console.log(calculateAge("1990-06-15")); // 34 (based on 2025)
console.log(calculateAge("2000-03-01")); // 25
console.log(calculateAge("2010-12-25")); // 14
console.log(calculateAge("2025-01-01")); // 0 (not born yet)
```

---

### ✅ 2. Checking if a Date is a Weekend (isWeekend)
**Task:** Write a function that checks whether a given date falls on a **Saturday or Sunday**.

#### **Solution:**
```javascript
function isWeekend(date) {
    let weekendDate = new Date(date);
    let day = weekendDate.getDay(); // 0 = Sunday, 6 = Saturday

    // Day names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // If the day is 0 (Sunday) or 6 (Saturday), it's a weekend
    let isWeekend = day === 0 || day === 6;

    return {
        date: date,
        day: days[day],
        isWeekend: isWeekend
    };
}

// Test Cases
console.log(isWeekend("2020-01-18")); // { date: '2020-01-18', day: 'Saturday', isWeekend: true }
console.log(isWeekend("2025-03-02")); // { date: '2025-03-02', day: 'Sunday', isWeekend: true }
console.log(isWeekend("2025-03-04")); // { date: '2025-03-04', day: 'Tuesday', isWeekend: false }
console.log(isWeekend("2025-03-01")); // { date: '2025-03-01', day: 'Saturday', isWeekend: true }
console.log(isWeekend("2025-03-05")); // { date: '2025-03-05', day: 'Wednesday', isWeekend: false }
```

---

## 📂 Project Structure
```
/Challenge-Date
│── calculateAge.js   # Age calculation function
│── isWeekend.js   # Weekend check function
│── README.md   # Project documentation
```

## ⚙️ Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/Enver-Onur-Cogalan/Challenge-Date.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Challenge-Date
   ```
3. Run JavaScript files using the following commands:
   ```sh
   node calculateAge.js
   node isWeekend.js
   ```

---

## 🚀 Explore the Project
You can check out the project on GitHub: [Challenge-Date Repository](https://github.com/Enver-Onur-Cogalan/Challenge-Date)

**Good luck and happy coding!** 🎯🔥

