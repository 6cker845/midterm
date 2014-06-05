var findFirstEvenNumber = function(n){
	for(i=0; i<n.length; i++){
		if(n[i]%2==0){
			return n[i];
			break;
		}
	}
}