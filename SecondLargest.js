let arr=[9,5,4,3,6,10,7,13,11]
function SecondLargest(arr){
    let max=0
    let second=0
    for(i=0;i<arr.length;i++){
        if(max<arr[i]){
            second=max
            max=arr[i]
        }else if(arr[i]<max && arr[i]>second ){
            second=arr[i]
        }
    }
    
    return second
}
console.log("Try programiz.pro",SecondLargest(arr));