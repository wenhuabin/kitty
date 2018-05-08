
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

function binarySearchWhile(arr, val){
    let left = 0, right = arr.length - 1, index = -1, mid;
    while(left <= right){
        mid = Math.floor((left + right) / 2);
        if(arr[mid] === val){
            index = mid;
            break;
        }else if(val < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return index;
}

let arr = [2,3,7,10, 18, 38];
console.log(binarySearch(arr, 0, 5, 10));
console.log(binarySearchWhile(arr, 10));
