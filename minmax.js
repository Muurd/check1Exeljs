function minmax(arr){
let max = arr[0];
let min = arr[0];

for (let i=0;i<arr.length-1;i++){
    if (arr[i] > max) {
        max = arr[i]
    } else if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(max,min)
}

arr = [12,15,14,25,,52];
minmax(arr)
