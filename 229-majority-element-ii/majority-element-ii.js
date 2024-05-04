/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let m1=nums[0];
    let m2=null;
    let count1 = 1;
    let count2 = 0;
    let res=[];

    for(let i=1;i<nums.length;i++){

        if(m1 == nums[i]){
            count1++;
        }else if(m2 == nums[i]){
            count2++;
        }else if(count1==0){
            m1=nums[i];
            count1=1;
        }else if(count2==0){
            m2=nums[i];
            count2=1;
        }else{
            count1--;
            count2--;
        }

    }

    let c1=0;
    let c2=0;

    for(let i=0;i<nums.length;i++){
        if(m1 == nums[i]){
            c1++;
        }
        if(m2 == nums[i]){
            c2++;
        }
    }

    if(c1>nums.length/3){
        res.push(m1);
    }

    if(c2>nums.length/3){
        res.push(m2);
    }


    return res;

};