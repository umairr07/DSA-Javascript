// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

const addOne = (arr) => {
    let n = arr.length;

    for (let i = n - 1; i >= 0; i--) {
        //if the arr element is less than 9 then we simply incrementing it and then return it
        if (arr[i] < 9) {
            arr[i] += 1;
            return arr
        }

        //here if the element is equal to 9 then we are assigning 0 to current arr element
        arr[i] = 0
    }

    //arr.unshift() adds the element to the beginning of the array
    //it is the case where all the elements are equal to 9
    arr.unshift(1)

    return arr;
}

// let arr = [4, 3, 2, 1]
let arr = [9, 9, 9]
console.log(addOne(arr))
