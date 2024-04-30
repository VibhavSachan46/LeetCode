/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = new Set()

    //sort the original array
    nums.sort((a, b) => a - b)

    // fix the first elememnt & find the other 2 element

    for (let i = 0; i < nums.length - 2; i++) {

        // find other 2 element using 2 sum approach
        let left = i + 1
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (sum == 0) {
                res.add([nums[i], nums[left], nums[right]].toString());
                left++
                right--
            }
            else if (sum < 0) {
                left++
            }
            else {
                right--
            }
        }
    }
    // Convert the Set to an array of arrays
    return Array.from(res).map(str => str.split(',').map(Number));
};