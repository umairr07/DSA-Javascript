// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

const mergedString = (arr1, m, arr2, n) => {
    let ans = [m + n]

    for (let i = 0; i < m; i++) {
        ans[i] = arr1[i]
    }

    for (let i = 0; i < n; i++) {
        ans[n + i] = arr2[i]
    }

    return ans.sort()

}

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
// let nums1 = [1]
// let m = 1
// let nums2 = []
// let n = 0
console.log(mergedString(nums1, m, nums2, n))