
function binarySearch(arr, left, right, val){
    let mid;
    if(left <= right){
        mid = Math.floor((left + right) / 2);
        if(arr[mid] === val){
            return mid;
        }else if(val < arr[mid]){
            return binarySearch(arr, left, mid - 1, val);
        }else{
            return binarySearch(arr, mid + 1, right, val);
        }
    }
    return -1;
}

let arr = [2,3,7,10, 18, 38];
console.log(binarySearch(arr, 0, 5, 10));
