function isSpecialArray(arr) {
    for (let i=0;i<arr.length;i++){
        if (arr[i] == 7 || arr[i] == 1 || arr[i] == 9 || arr[i] == 3) {
            return true;
        }
    }
    return false;

}
arr = [3,8,4,2,75,4,0];
console.log(isSpecialArray(arr))