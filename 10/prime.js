/*
var isInteger = function(n){
	return Number.isInteger(n);
};

var prime = factorial(n){
	if(isInteger(n) && n>0){
		return true;
	}
}
*/

var prime = function(n) {
    if (n%2 == 0) return n == 2;
    if (n%3 == 0) return n == 3;
    var limit = Math.sqrt(n);
    for (var i=5, d=2; i <= limit; i+=d, d=6-d) {
        if (n%i == 0) return false;
    }
    return true;
}


//問10の回答例

var isPrimeNumberCandidate = function(n){
	return Number.isInteger(n) && n > 1;
};
var findDivisorOf = function(n, upperBound){
	var i = 2;
	while(i < upperBound){
		if(n % i == 0){
			return i;
		}
		i = i + 1;
	}
	return null;
}

var prime = function(n){
	return isPrimeNumberCandidate(n) && findDivisorOf(n, n/2 + 1) == null;
};



