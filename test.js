function test(){
  
  var a = [12,11,0,23,45,56,33,12,34,9,5,34,55,34,42,64,43,66,59,90,99,66,60,80,98,100,52,65,0,91];
  var b =[];
  for(var i = 0 ;i <5;i++){
  	var random = Math.floor(Math.random()*(29-i));
  	b.push(random);
  }
  check(a,b);
}
function check(a,b){
  var a = a || [];
  var b = b || [];
  var count =0 ;
  // console.log(a);
  for (var i = b.length - 1; i >= 0; i--) {
     if(b[i]<16){
     	count++;
     }
  };
  back(count,a);
  // console.log(a);
}

function back(i,a){
	// console.log(i);
   var a = a || [];
   var index = i;
   console.log(16+index);
}