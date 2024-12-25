function squareDigits(n) {
	let n2 = n.toString();
    let S = "";
    for (let i=0;i<n2.length;i++){
       let a = parseInt(n2[i]) ** 2;
        S += a.toString();
    }
    console.log(S);
}
squareDigits(12232)

