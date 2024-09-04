/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    const subset = []

    const createSubset = function(i) {
        if(i == nums.length){
            res.push([...subset])
            return
        }

        // selecting character
        subset.push(nums[i])
        createSubset(i+1)

        // not selecting character
        subset.pop()
        createSubset(i+1)
    }

    createSubset(0)
    return res
};