const obj={
    name:"rahul",
    age:34,
    phone:2231
}
const obj2={
    name:"rahul",
    age:34,
    phone:2231
}

function objComp(obj1,obj2){
    const obj1Key=Object.keys(obj1)
    const obj2Key=Object.keys(obj2)
    
    if(obj1Key.length!=obj2Key.length) return false
    for(let i of obj1Key){
        const val1=obj1Key[i]
        const val2=obj2Key[i]
        
        if(val1!==val2) return false
    }
    return true
}
console.log("Try programiz.pro",objComp(obj,obj2));