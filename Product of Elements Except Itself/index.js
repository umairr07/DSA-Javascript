// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const prodExceptItselt = (arr) => {
    let n = arr.length;
    let prefix = []
    prefix[0] = arr[0]
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * arr[i]
    }

    let suffix = []
    suffix[n - 1] = arr[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * arr[i]
    }

    let ans = []
    ans[0] = suffix[1]
    ans[n - 1] = prefix[n - 2]
    for (let i = 1; i < n - 1; i++) {
        ans[i] = prefix[i - 1] * suffix[i + 1]
    }

    return ans
}

let arr = [1, 2, 3, 4]
console.log(prodExceptItselt(arr))