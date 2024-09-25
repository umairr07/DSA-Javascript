// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

const mergedString = (str1, str2) => {

    let n = str1.length
    let m = str2.length

    let combineLength = n + m

    let i = 0, j = 0
    let ans = []
    while (combineLength > 0) {
        if (i !== n) {
            ans.push(str1[i])
            i++
        }

        if (j !== m) {
            ans.push(str2[j])
            j++
        }
        combineLength--
    }

    return ans.join("")
}

let str1 = "abc";
let str2 = "pqr";
console.log(mergedString(str1, str2))
