var factorial = function(n){
	if(Number.isInteger(n) && n>0){
		var x=1;
		while(n>0){
			x = x*n;
			n--;
		}
		return x;
	} else if(!Number.isInteger(n) && n>1){
		var x = 1;
		var num = Math.floor(n);
		while(num>1){
			x = x*num;
			num--;
		}
		return x;
		}
}


	/*
 else if(n<=0){
		return null;
	} else {
		return null;
	}
*/


/*
function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
*/