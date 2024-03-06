function maxSubarraySum(arr) {
    if (!arr.length) {
        return 0;
    }

    let maxSum = arr[0];
    let currentSum = arr[0];
    console.log(`${maxSum} & ${currentSum}`)

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        maxSum = Math.max(maxSum, currentSum);
        console.log(`${maxSum} & ${currentSum}`)
    }

    return maxSum;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(arr);
console.log("Maximum sum of contiguous subarray:", result);