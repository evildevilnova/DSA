
let num=9474 //1234
function armStrong(num){
    let str=String(num)
    let cal=null
    for(i of str){
        cal+=Math.pow(i,str.length)
    }
    
    return num==cal
}
console.log("Try programiz.pro",armStrong(num));