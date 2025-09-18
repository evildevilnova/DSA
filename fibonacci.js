
function fibonacci(n){
    let a=0,b=1;
    let result=[];
    for(i=0;i<n;i++){
        result.push(a)
        let next=a+b;
        a=b;
        b=next;
    }
    
    return result
}

console.log("Try programiz.pro",fibonacci(10));

// output - [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]