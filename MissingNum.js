let arr=[12,8,9,10,18]

function findMissing(arr){
    let min=arr[0]
    let max=arr[0]
    let miss=[]
    
    for(val of arr){
        if(val<min){
            min=val
        }else if(val){
            max=val
        }
    }
    
    for(i=min;i<=max;i++){
        let flag=false;
        
        for(j of arr){
            if(i==j){
                flag=true
                break;
            }
        }
        if(!flag){
            miss.push(i)
        }
    }
    
    return miss
}


console.log("Try programiz.pro",findMissing(arr));