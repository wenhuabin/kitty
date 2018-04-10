
function find(arr, val, start, end){
    if(start > end){
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === val){
        return mid;
    }else if(val < arr[mid]){
        return find(arr, val, start, mid - 1);
    }else{
        return find(arr, val, mid + 1, end);
    }
}


console.log(find([2,3,4,5,6], 4, 0, 4));
console.log(find([2,3,4,5,6], 1, 0, 4));
console.log(find([2,3,4,5,6], 6, 0, 4));
