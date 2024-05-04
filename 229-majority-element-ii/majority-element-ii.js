/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let el1 = 0, el2 = 0, c1 = 0, c2 = 0

    for (let i = 0; i < nums.length; i++) {
        if (c1 == 0 && el2 != nums[i]) {
            el1 = nums[i]
            c1 = 1
        }
        else if (c2 == 0 && el1 != nums[i]) {
            el2 = nums[i]
            c2 = 1
        }
        else if (el1 == nums[i]) c1++
        else if (el2 == nums[i]) c2++
        else {
            c1--
            c2--
        }
    }

    c1=0
    c2=0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == el1) c1++
        if (el2 == nums[i]) c2++
    }
    console.log("C1 is ",c1)
    console.log("C2 is ",c2)

    let res = []
    if (c1 > nums.length / 3) {
        res.push(el1)
    }
    if (c2 > nums.length / 3 && el1 != el2) {
        res.push(el2)
    }

    return res
};