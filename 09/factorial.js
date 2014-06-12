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


//問９の回答例

var calcFactorial = function(n){
	if(n > 1){
		return 1
	}else{
		return n * calcFactorial(n-1);
	}
};

var factorial(n){
	n = Number(n);
	if(number.isNaN(n)&& n > 0){
		return calcFactorial(Math.floor(n));
	} 
	return null;
};