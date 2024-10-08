/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 1) return nums[0]
    let cur = 0
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        cur = cur + nums[i]

        if (cur > max) {
            max = cur
        }

        if (cur < 0) {
            cur = 0
        }
    }

    return max
};