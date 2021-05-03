var sum=0;
var testArr = [6,3,5,1,2,4];
for(var i=0; i< testArr.length; i++){
console.log("num "+testArr[i]);
sum= sum+testArr[i];
console.log("sum "+sum );
}//num=6,sum=6
//num=3,sum=9
//num=5,sum=14
//num=1,sum=15
//num=2,sum=17
//num=4,sum=21
var testArr = [6,3,5,1,2,4];
for(var i=0; i<testArr.length;i++){
testArr[i]=i*testArr[i];

}
console.log(testArr);
//[0,3,10,3,8,20]