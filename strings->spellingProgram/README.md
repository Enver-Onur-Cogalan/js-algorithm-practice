# Syllable Separation Program

## 🧠 Challenge: Syllable Separation
This project implements a function that splits a given Turkish word into its syllables. The function identifies syllables by analyzing the placement of vowels in the word.

---

## 🌍 Live Demo
You can run this project within an HTML file. The JavaScript function processes a word and prints the syllabified result in the browser console.

---

## 🔧 How It Works?

1. **Converts the word to lowercase.**
2. **Identifies vowels and determines syllable boundaries.**
3. **Ensures that consonant clusters are correctly handled.**
4. **Appends the final syllable to the result.**

---

## 📚 Technologies Used
- HTML
- JavaScript (ES6+)

---

## 📝 Code Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syllable Separation Program</title>
</head>
<body>
    <h1>Challenge: Syllable Separation</h1>
    <script>
        const vowels = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];

        function syllableSeparation(word) {
            word = word.toLowerCase();
            let syllables = [];
            let syllable = '';

            for (let i = 0; i < word.length; i++) {
                syllable += word[i]; // Add letter

                if (vowels.includes(word[i])) {
                    if (i + 1 < word.length && !vowels.includes(word[i + 1])) {
                        if (i + 2 < word.length && !vowels.includes(word[i + 2])) {
                            syllable += word[i + 1];
                            i++;
                        }
                        syllables.push(syllable);
                        syllable = '';
                    } else {
                        syllables.push(syllable);
                        syllable = '';
                    }
                }
            }
            if (syllable) {
                syllables[syllables.length - 1] += syllable;
            }

            return syllables;
        }

        console.log(syllableSeparation('Patika')); // ["pa", "ti", "ka"]
        console.log(syllableSeparation('bilgisayar')); // ["bil", "gi", "sa", "yar"]
        console.log(syllableSeparation('Onur')); // ["o", "nur"]
        console.log(syllableSeparation('yazılım')); // ["ya", "zı", "lım"]
    </script>
</body>
</html>
```

---

## 📌 Example Usage
```js
console.log(syllableSeparation('Patika')); // ["pa", "ti", "ka"]
console.log(syllableSeparation('bilgisayar')); // ["bil", "gi", "sa", "yar"]
console.log(syllableSeparation('Onur')); // ["o", "nur"]
console.log(syllableSeparation('yazılım')); // ["ya", "zı", "lım"]
```

---

## 🎉 Contributions
Feel free to contribute by creating a **pull request**. You can improve the algorithm, add test cases, or optimize the code! 🚀

---

## 💡 Future Enhancements
- Implement a user input form to process words dynamically.
- Enhance syllable separation rules for complex cases.
- Allow multiple words to be processed at once.

---

**Keep refining the algorithm and challenge yourself to improve it! 💪🔥**
