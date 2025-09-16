// find number which is sum is 8
let arr=[1,2,3,4,5,6,7,8,9,10]
function findPairs(arr,target){
    let nArr=[]
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                nArr.push([arr[i],arr[j]])
            }
        }
    }
    return nArr
}
console.log("Try programiz.pro",findPairs(arr,8));

// output - [ [ 1, 7 ], [ 2, 6 ], [ 3, 5 ] ]