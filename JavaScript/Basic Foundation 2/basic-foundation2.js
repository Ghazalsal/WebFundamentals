function big(){
    var arr=[-1,3,5,-5];
    for(var i =0; i< arr.length;i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    console.log(arr);
    return arr;
}
big();
//[-1, "big", "big", -5]


function printReturn(){
    var arr=[5,-3,0,12,-7];
    var min=arr[0];
    var max=arr[0];
    for(var i =0;i < arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
        
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(min);
    return max;
}
printReturn();
//-7

function returnOther(){
    var arr=[7,-3,8,2];
    console.log(arr[arr.length-2]);
    for(var i = 0; i< arr.length; i++){
        if(arr[i]%2 ==1){
            console.log(arr[i]);
        }
    }
}
returnOther();
//8,7




function double(){
    var arr=[2,8,6,-8];
    var newArr=[];
    var sum;
    // var Array;
    for(var i = 0; i< arr.length;i++){
        sum=arr[i]*2;
        newArr.push(sum);
    }
    console.log(newArr);
    return newArr;
}
double();
//[4, 16, 12, -16]



function countPos(){
    var arr=[-1,1,1,1];
    var sum=0;
    for(var i =0; i< arr.length; i++){
        if( arr[i]>0){
            sum+=arr[i];
        }
    }
    arr.pop();
    arr.push(sum);
    console.log(arr);
    return arr;
}
countPos();
//[-1, 1, 1, 3]


function evenOdd(){
    var arr=[5,3,1,4,8,2,5,6];
    for( var i =0; i< arr.length; i++){
        if( arr[i]%2 !=0){
            if(arr[i+1]% 2 !=0){
                if(arr[i+2]%2 !=0){
                    console.log("that's Odd!");
                }
            }
            
        }
     else if(arr[i]%2 ==0){
            if(arr[i+1]% 2 ==0){
              if(arr[i+2]%2 ==0){
               console.log("even more so");
              }
            }  
             
            }
}    
} 
evenOdd();
//"that's Odd!"
//"even more so"



function increment(){
    var arr=[2,1,8,-9,5];
    for(var i=1; i<arr.length;i+=2){
        arr[i]=arr[i]+1;
    }
    console.log(arr);
    return(arr);
}
increment();
//[2, 2, 8, -8, 5]


function previous(arr){
     arr=["hello", "dojo", "awesome"];
    
    for(var i = arr.length-1; i>0; i--){
        arr[i]= arr[i-1].length;
    }
        return arr;
}
console.log(previous(["hello", "dojo", "awesome"]));
//["hello", 5, 4]



function seven(){
    var arr=[-3,7,8,4];
    var newArr=[];
        for(var i =0; i< arr.length; i++){
            var x=arr[i]+7;
            newArr.push(x);
        }
        console.log(newArr);
        return newArr;
    }
    seven();
    //[4, 14, 15, 11]



    function reverse(){
        var arr=[3,1,6,4,2];
        arr.reverse();
        console.log(arr);
        return arr;
    }
    reverse();
    //[2, 4, 6, 1, 3]

    function negative(){
        var arr=[1,-3,5];
        for(var i=0; i<arr.length;i++){
            if(arr[i]>0){
                arr[i]=arr[i]*-1;
            }
        }
        console.log(arr);
            return(arr);
        }
        negative();
        //[-1, -3, -5]


        function hungry(){
            var arr=["food","sam","food","uncle"];
            for(var i =0;i< arr.length;i++){
                if(arr[i] =="food"){
                    console.log("yummy");
                }
                if(arr[i]!= "food"){
                    var x="I'm hungry!";
                }
                
            }
            console.log(x);
            return x;
        }
        hungry();
        //"yummy"
        //"yummy"
        //"I'm hungry!"


        function swap(){
            var arr=[5,4,7,2];
                for (var i = 0; i < arr.length/2; i+=2){
                    var temp = arr[i];
                    arr[i] = arr[arr.length-1-i];
                    arr[arr.length-1-i] = temp;
                }
                console.log(arr);
                return arr;
            }
            swap();
            //[2, 4, 7, 5]


            function scale(){
                var arr=[5,1,-3,2];
                var num = arr.length;
                for(var i=0; i<arr.length;i++){
                arr[i]=arr[i]*num;
                
            }
            console.log(arr);
                return(arr);
            }
            scale();
            //[20, 4, -12, 8]

    


