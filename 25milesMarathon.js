function marathonDistance(d) {
    let td = 0;
	for (let i = 0;i<d.length;i++){
        td = td + d[i];  
    }
    if (td == 25){
        return true;
    } else {
        return false;
    }
    
}
d = [1,5,10,6,3];
console.log(marathonDistance(d))