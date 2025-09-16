
let arr=[1,2,3,4,5,6,7,8,9]
function primNumber(arr){
    let nArr=[]
    for(i=0;i<arr.length;i++){
        if (arr[i] < 2) continue;
        let flag=true
        for(j=2;j<arr[i];j++){
            if(arr[i]%j===0){
                 flag=false
                 break
            }
        }
        if(flag){
            nArr.push(arr[i])
        }
    }
    
    return nArr
}
console.log("Try programiz.pro",primNumber(arr));