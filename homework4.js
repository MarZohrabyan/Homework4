//1.Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 
// So if we call your function with triangleStars(4), we should see:
const triangleStars = function(n){
  let line = n- 1; 
    while(line >-1){
	 let currStr = ""; 
     let probel  = n - line;
     let stars = 1 + (2 * (line)); 
	  let a= 0; 
	  let b= 1; 
		while(a< probel) {
				currStr += "-"; 
				a++;
		};
			
		while(b<= stars){
				currStr += "*"; 
				b++;
	    };

		console.log(currStr); 
		line--; 
    }
  }

//2.Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
const arr= function(a){
    let array= [];
    let x= 0
   while(x < a.length){
     let y=0
     while(y<a[x].length){
       array[array.length]=a[x][y];
       y++
     };
     x++
   }
   return array;
 }
   

   //3. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true. 
   // It returns the smallest number in the given array if the second argument is false.
   const f= function(array,boolean){
if(boolean){
 return Math.max.apply(null, array)
}else{
 return Math.min.apply(null, array)
}

}
//4. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.
 const forEach = function (a, f) {
    let x = 0;
    while (x < a.length){
        f(a[x]);
        x++;
    }
}

forEach([14,10,1997,11,7,2001], function(all) {
    console.log(all);
});
 //5.Create a function 'sum' that takes an array of numbers and returns their sum.
 const sum= function(a){
	let b=0;
	let runningSum=0;
	while(b < a.length){
		runningSum += a[b];
		b=b+1;
	}
	return runningSum;
}
 //6.Write a function 'reverse' that reverses the given string. 
 const reverse= function(str){
	let b=0;
	let runningStr='';
	while(b<str.length){
		runningStr += str[str.length-1-b];
		b++;
	}
	return runningStr;
}

//7.Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  
 const reverse= function(str){let b=0;
	let runningStr='';
	while(b<str.length){
		runningStr += str[str.length-1-b];
		b++;
	}
	return runningStr;
}

const checker= function(size) 
{
	let b = 0;
	let runningStr = "";
	const star = "*";
	const space= "  ";  
  while(b < size)
  {
		runningStr += star+space
		b++
  }
  return runningStr;
}

const checkerboard = function(size) {
  
  let c = 0;
  const runningStr = checker(size);
  for(let i = 0; i < size; i++) {
    if(c % 2 === 0){
        console.log(runningStr);
    } else{
        console.log(reverse(runningStr));
    }
    c++;
  }
}  




