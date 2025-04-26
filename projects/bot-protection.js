/*
* Bir oyun şirketi, bazı oyuncuların oyun sırasında onların yerine oynayan scriptler kullandığını ve bunun sonucunda
* para kaybettiklerini fark etti.
* 
* Sunucularındaki erişim loglarından, geliştiriciler her oyuncunun hangi komutları gönderdiğini görebiliyor. 
* Bu komutları analiz ettiklerinde, bu scriptlerin sürekli aynı komut dizisini kullandığını keşfettiler.
* 
* Göreviniz, temizlenmiş erişim loglarını kullanarak botları tespit etmektir. Bir oyuncunun temizlenmiş erişim 
* logu, oyuncu tarafından gönderilen komutların boşluklarla ayrılmış bir dizisi şeklinde görünecektir. 
* Temizlenmiş erişim logunda, 3 ARDIŞIK komutun EN AZ 2 KEZ tekrar edilip edilmediğini tespit edin.
* 
* Örneğin, aşağıdaki gibi bir erişim logumuz var:
* 
* left right fire jump fire back forward forward jump fire back left left right
* Bu durumda, "jump fire back" dizisinin iki kez tekrarlandığını görebiliriz.
*
* Parametre her zaman bir array olarak verilecektir.
* Fonksiyonunuz tekrar eden komutu return etmelidir.
*
* Example
* Input: [ "left", "right", "fire", "jump", "fire", "back", "forward", "forward", "jump", "fire", "back" ]
* Output: "jump fire back"
*/

function botProtection(arr) {
    // TODO: Implement Me
    if (!Array.isArray(arr)) {
        throw new Error('Girdi bir array olmalıdır!'); // Throw error
    }

    let seenPatterns = {}; //Object used to keep track of repetitions

    for (let i = 0; i <= arr.length - 3; i++) {
        // create 3 word pattern
        let pattern = arr[i] + ' ' + arr[i + 1] + ' ' + arr[i + 2];

        // If this pattern exists before, increase the number, otherwise set it to 1.
        if (seenPatterns[pattern]) {
            seenPatterns[pattern]++; //increase the number
        } else {
            seenPatterns[pattern] = 1; // // If seen for the first time, set it to 1
        }

        // If it repeated twice, return
        if (seenPatterns[pattern] === 2) {
            console.log(pattern);
            return pattern;
        }
    }
    return ''; // If there is no repeating 3rd, return empty string
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node bot-protection.js
botProtection([
    "left",
    "right",
    "fire",
    "jump",
    "fire",
    "back",
    "forward",
    "forward",
    "jump",
    "fire",
    "back",
    "left",
    "left",
    "right"
]);