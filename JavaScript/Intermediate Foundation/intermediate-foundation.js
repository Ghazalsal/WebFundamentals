//question 1:
function sigma(num){
    var sum=0;
for(var i=1;i<=num;i++ ){
    sum= sum+i;
}
console.log(sum);
return sum;
}
sigma(3);
//6

//question 2:
function sigma(num){
    var sum=1;
 for(var i=1;i<=num;i++ ){
    var sum= sum*i;
 }
 console.log(sum);
 return sum;
 }
 sigma(5);
 //120


//question 3: 
function fibonacci(){
    arr=[0,1];
for(var i=2; i<=5;i++){
arr.push(arr[i-2] + arr[i-1]);
}
console.log(arr);
}
fibonacci();
//


//question 4: 
function returnL(){
    var arr=[42, true, 4, "Liam", 7];
    if( arr.length < 3){
    return null;
    } else{
    return arr[arr.length-2];
    }
    }
    returnL();
  //

  //question 5:
function returnN(n){
    var arr=[42, true, 4, "Liam", 7,5,-8];
    if( arr.length < 3){
    console.log("Null");
    return null;
    } else{
    console.log(arr[arr.length-n]);
    return arr[arr.length-n];
    }
    }
    returnN(3);
    //returns 7

    //question 6:
    function nMax(){
        var arr=[-3,3,5,7];
        var max= arr[0];
        for(var i = 0; i< arr.length; i++){
            if(arr[i]>max){
                max=arr[i];
                arr.splice(max);
            }
        }
        for(var i=0; i<arr.length;i++){
          if(arr[i]>max){
                max=arr[i];
                
            }
        }
        console.log(max);
        return max;
    }
    nMax();
    //5


    //question7:
function double(arr) {  
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    console.log(newArr);
    return newArr; 
}
double([4, 2.14, "ulissess", "hello"]);
//[4, 4, 2.14, 2.14, "ulissess", "ulissess", "hello", "hello"]
    
    
    
  
  

    