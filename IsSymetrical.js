function isSymmetrical(num) {
    let Strnum = num.toString();
	for (let i=0;i<Strnum.length / 2;i++){
        if (Strnum[i] !== Strnum[Strnum.length - 1 - i]){
            return false;
        }       
    }
    return true;
}
Strnum = 12344431;
isSymmetrical(Strnum)
console.log(isSymmetrical(Strnum))