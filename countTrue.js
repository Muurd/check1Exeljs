function countTrue(arr) {
    let count = 0;
	for (let i=0;i<arr.length;i++){
        if (arr[i] === true) {
            count++
        }
    }
    console.log(count)
}
arr = [true, false, false, true, false];
countTrue(arr)