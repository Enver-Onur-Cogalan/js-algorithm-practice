# Bootcamp JavaScript Algoritma Projesi 🚀

Bu proje, JavaScript kullanarak üç farklı algoritma problemini çözmeyi amaçlamaktadır. 
Kodlar, belirlenen problemleri en verimli ve anlaşılır şekilde çözmek için yazılmıştır. 
Bu proje sayesinde hem algoritma becerilerinizi geliştirebilir hem de GitHub kullanımı konusunda deneyim kazanabilirsiniz.

---

## 📌 Proje İçeriği
Bu projede üç farklı algoritma sorusunu çözüyoruz:

1. **Palindrome Kontrolü** → Bir kelimenin palindrome olup olmadığını kontrol eden fonksiyon.
2. **Diziyi Gruplara Bölme (Chop Array)** → Bir diziyi belirli büyüklükteki parçalara bölen fonksiyon.
3. **Bot Tespiti (Bot Protection)** → Oyuncuların komut dizilerini analiz edip tekrar eden üçlü komutları bulan fonksiyon.

---

## ⚙️ Kurulum ve Kullanım
1. Bu repoyu bilgisayarınıza klonlayın:
   ```sh
   git clone https://github.com/kullaniciadi/bootcamp-algoritma-projesi.git
   ```
2. Terminal veya komut satırında proje klasörüne girin:
   ```sh
   cd bootcamp-algoritma-projesi
   ```
3. JavaScript dosyalarını çalıştırmak için aşağıdaki komutu kullanabilirsiniz:
   ```sh
   node dosyaAdi.js
   ```
   Örneğin:
   ```sh
   node palindrome.js
   ```

---

## 📜 Algoritmalar ve Çözümler

### **1. Palindrome Kontrolü**
**Soru:** Verilen bir string'in palindrome olup olmadığını belirleyen bir fonksiyon yazın.

#### **Çözüm:**
```javascript
function palindromeChecker(str) {
    let lowerStr = str.toLowerCase();
    let reversedStr = lowerStr.split('').reverse().join('');
    return lowerStr === reversedStr;
}

console.log(palindromeChecker("Racecar")); // true
console.log(palindromeChecker("Level")); // true
console.log(palindromeChecker("John Doe")); // false
```

---

### **2. Diziyi Gruplara Bölme (Chop Array)**
**Soru:** Verilen bir diziyi belirli sayıda elemandan oluşan gruplara ayırın. Eğer son grup eksikse, kalan elemanları "remaining" adıyla ekleyin.

#### **Çözüm:**
```javascript
function chopArray(array, numElements) {
    const result = {};
    let groupNum = 1;

    for (let i = 0; i < array.length; i += numElements) {
        let group = array.slice(i, i + numElements);
        if (group.length === numElements) {
            result[`group${groupNum}`] = group;
            groupNum++;
        } else {
            result['remaining'] = group;
        }
    }
    return result;
}
```

---

### **3. Bot Tespiti (Bot Protection)**
**Soru:** Oyuncuların komut geçmişinde tekrar eden üçlü komut dizilerini bulan fonksiyon yazın.

#### **Çözüm:**
```javascript
function botProtection(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Girdi bir array olmalıdır!');
    }
    
    let seenPatterns = {};
    
    for (let i = 0; i <= arr.length - 3; i++) {
        let pattern = arr[i] + ' ' + arr[i + 1] + ' ' + arr[i + 2];
        if (seenPatterns[pattern]) {
            seenPatterns[pattern]++;
        } else {
            seenPatterns[pattern] = 1;
        }
        if (seenPatterns[pattern] === 2) {
            return pattern;
        }
    }
    return '';
}
```

---

## 📩 Ödevi Teslim Etme
1. Çözümleri tamamladıktan sonra kendi GitHub hesabınızda fork'ladığınız repoya **commit** yapın.
2. **Commit mesajlarını açıklayıcı bir şekilde yazın** (Örneğin: `Added solution for palindrome checker`).
3. Ödevinizi değerlendirilmesi için repoya mentörleri **collaborator** olarak ekleyin:
   - `patikaplusmentor1`
   - `patikaplusmentor2`

> **Not:** Repoyu gizli (private) hale getirmeyi unutmayın!

---

## ❗ Önemli Notlar
✔ Kodunuzu açıklayıcı yorumlarla destekleyin.
✔ Algoritmaları test etmek için **console.log()** kullanarak örnek çıktılar alın.
✔ Kodlarınızı mümkün olduğunca **temiz ve optimize** yazmaya çalışın.
✔ Eğer takıldığınız bir yer olursa internetten araştırma yapmaktan çekinmeyin!

---

🚀 **Başarılar dileriz!** 😊