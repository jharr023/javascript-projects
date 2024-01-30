//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function findMinimumValue(nums1) {
    let min = nums1[0]
    
    for (let i = 1; i < nums1.length; i++) {
        if (nums1[i] < min) {
            min = nums1[i];
        }
    }
    return min;
    }
    console.log("Minimum value:", findMinimumValue(nums1));

    function sortArray(nums1) {
let sortedArray = []
        while (nums1.length > 0) {
            let minValue = findMinimumValue(nums1);
            sortedArray.push(minValue);
            nums1 = nums1.filter(num => num !== minValue);
        }
        return sortedArray;
    }
    console.log("Sorted array:", sortArray(nums1));
//Sort each array in decending order.

function findMaximumValue(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    // Assume the first element is the largest
    let max = arr[0];
  
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // If the current element is larger than the current maximum, update the maximum
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    // Return the maximum value found
    return max;
  }

function sortArrayDescending(arr) {
    // Create a new array to hold the final sorted numbers
    let sortedArray = [];
  
    // Continue until the old array is empty
    while (arr.length > 0) {
      // Find the maximum value in the old array
      let maxValue = findMaximumValue(arr);
  
      // Add the maximum value to the new array
      sortedArray.push(maxValue);
  
      // Remove the maximum value from the old array
      arr = arr.filter(num => num !== maxValue);
    }
  
    // Return the new sorted array
    return sortedArray;
}
console.log("Sorted array in descending order:", sortArrayDescending(nums1));