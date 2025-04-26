/*
* Verilen arrayi, verilen sayida elemente sahip gruplara ayristirin. Eger islem sonucunda ayrismamis element kaldiysa, kalan grubuna ekleyin.
* Fonksiyonunuz asagidaki gibi bir obje return etmelidir.
*
* {
*   grup1: [ 1, 2 ],
*   grup2: [ 3 ,4 ],
*   kalan: [ 5 ]
* }
*
* Example
* Input: chopArray([1,2,3,4,5], 2)
* Output:
* {
*   grup1: [ 1, 2 ],
*   grup2: [ 3 ,4 ],
*   kalan: [ 5 ]
* } 
*/

function chopArray(array, numElements) {
    // TODO: Implement Me
    
    // Edge case: Prevent infinite loop when numElements is 0
    if (numElements === 0) {
        throw new Error("numElements cannot be 0");
    }
    
    const result = {};
    let groupNum = 1; // To keep track of group numbers

    // Split the array by the specified number of elements
    for (let i = 0; i < array.length; i += numElements) {
        let group = array.slice(i, i + numElements); // Shredding process

        if (group.length === numElements) {
            result[`group${groupNum}`] = group;
            groupNum++; //Increment counter for next group
        } else {
            result['remaining'] = group; // If the last group is not completed, add it as "remainder"
        }
    }

    console.log(result);
    return result;
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node chop-array.js
chopArray(['a', 'b', 1, 2, 'c', 'd', 525], 4);
chopArray([10, 20, 11, 30, 41, 50], 3);
chopArray([10, 20, 11, 30, 41, 50], 2);
chopArray([10, 20, 11, 30, 41, 50], 1);
chopArray([10, 20, 11, 30, 41, 50], 6);
