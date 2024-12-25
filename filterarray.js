function filterArray(arr) {
    let arr2 = [];
	for (let i=0;i<arr.length;i++){
        if  (typeof arr[i] === "number"){
            arr2.push(arr[i]);
        }
    }
    console.log(arr2)
}
arr = [3,5,2,1,"hello","akii","n",2,4,"squsqu"];
filterArray(arr)