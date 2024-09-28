# Product of Array Except Itself

- This is a JavaScript solution to calculate the product of all elements in an array except for the element at the current index.

## Problem Explanation

- Given an array nums, return an array output where output[i] is the product of all elements of nums except nums[i].

### Example:

```
Input:  nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]
```

## Explanation:

- For each element in the output array, the value is calculated as the product of all the elements in the input array except for the element at that position.

## Approach

- To solve this problem efficiently, we need to use prefix and suffix arrays.

## #Prefix Product:

Prefix product stores the cumulative product of all the elements before the current index.

- Formula:

  ```js
  prefix[i] = prefix[i - 1] * arr[i];
  ```

## #Suffix Product:

Suffix product stores the cumulative product of all the elements after the current index.

- Formula:

  ```
  suffix[i] = suffix[i+1] * arr[i]
  ```

## #Result Array:

After computing the prefix and suffix arrays, the result is calculated by multiplying the prefix and suffix for each element, excluding the current index.

For example, for position i, the value would be:

```
ans[i] = prefix[i - 1] * suffix[i + 1]
```

## Time Complexity:

- The solution runs in O(n) time, where n is the length of the input array. We iterate through the array three times to calculate the prefix, suffix, and result arrays.

## Space Complexity:

- The space complexity is O(n) because we use three additional arrays (prefix, suffix, and ans) to store intermediate values.
