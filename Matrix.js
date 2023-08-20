// diagonalDifference 

// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal = 1 + 5 + 9= 15. The right to left diagonal = 3 + 5 + 9 = 17.
// Their absolute difference is | 15 -17 | = 2.

let arr=[
    [1, 2, 3,4],
    [4, 5, 6,4],
    [9, 8, 9,4],
    [9, 8, 9,4]
]  
    
function diagonalDifference(arr) {
    var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}

console.log("Welcome to Programiz!",diagonalDifference(arr));

// input - arr=[
//                 [1, 2, 3, 4],
//                 [4, 5, 6, 4],
//                 [9, 8, 9, 4],
//                 [9, 8, 9, 4]
//              ]  
// output - 8
