
//export const swap = function(arr, i, j){
const swap = function(arr, i, j){
    let tmp = undefined;
    if(Array.isArray(arr) && i <= arr.length && i >= 0 && j <= arr.length && j >= 0){ 
        tmp = arr[i];
        arr[i] = arr[j]
        arr[j] = tmp;
    }
}

let arr = [1,2];
swap(arr, 0, 1);
console.log(arr);
