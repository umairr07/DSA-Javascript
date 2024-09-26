// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"


const reverseWords = (str) => {
    let arr = str.split(" ")
    console.log(arr)

    let ans = []
    for (let i = arr.length - 1; i >= 0; i--) {
        ans.push(arr[i])

        if (arr[i] === "") {
            ans.pop()
        }
    }
    return ans.join(" ")
}

// let str = "the sky is blue"
let str = "a good   example"
console.log(reverseWords(str))