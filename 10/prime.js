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