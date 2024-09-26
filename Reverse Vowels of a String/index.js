// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".


const reverseVowels = (str) => {
    let arr = str.split("")
    let i = 0
    let j = str.length - 1

    while (i < j) {
        if (isVowel(arr[i]) && isVowel(arr[j])) {
            // swap vowels
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
        else if (!isVowel(arr[i])) {
            i++
        }
        else if (!isVowel(arr[j])) {
            j--
        }
    }
    return arr.join("")
}

const isVowel = (str) => {
    return "aeiouAEIOU".includes(str)
}

let str = "IceCreAm"
console.log(reverseVowels(str))