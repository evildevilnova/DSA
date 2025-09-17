function binarySearch(arr, find) {
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (arr[mid] === find) return mid;
        else if (arr[mid] < find) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let pos = binarySearch(arr, 6);

console.log("Position:", pos);
