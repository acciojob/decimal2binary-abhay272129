function decimalToBinary(num) {
  //Write you code here
	let rem=0;
	let output="";
	while(num>0){
		rem=num%2;
		output=rem+output;
		num=parseInt(num/10);
	}
  if(num==1){
	  output=num+output;
  }
	return output;
}

window.decimalToBinary = decimalToBinary;
