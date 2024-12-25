// function arrayOfMultiples (num, length) {
//     let num2 = num
//     let arr = [];
// 	for (let i=0;i<length;i++){
//         arr.push(num2)
//         num2+= num
//     }
//     console.log(arr)
// }
// arrayOfMultiples (5, 20)

//2nd method

function arrayOfMultiples (num, length) {
    let num3 = num;
    let sum = 0;
    let arr2 = [];
    sum = num * length;
    for (let i=0; i<length;i++){
        arr2.push(num)
        num += num3;
    }
    console.log(arr2)
}
arrayOfMultiples (3, 10)