function sumOfCubes(nums) {
    let sum = 0;
    for (let i=0;i<nums.length;i++){
        sum += nums[i] ** 3 
    }
    console.log(sum)
}

arr = [2,2,4,3];
sumOfCubes(arr)