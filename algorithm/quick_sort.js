function swap(arr, i, j){
    let tmp = undefined;
    if(Array.isArray(arr) && i <= arr.length && i >= 0 && j <= arr.length && j >= 0){ 
        tmp = arr[i];
        arr[i] = arr[j]
        arr[j] = tmp;
    }
}

function quickSort(arr, left, right){
    let tmp, i, j;
    if(left > right)return;
    i = left, j = right;
    tmp = arr[left];
    while(i != j){
        while(arr[j] >= tmp && i < j) j--;
        while(arr[i] <= tmp && i < j) i++; 
        if(i < j){
            swap(arr, i, j);
        }
    }
    arr[left] = arr[i];
    arr[i] = tmp;
    quickSort(arr, left, i-1);
    quickSort(arr, i+1, right);
}

let arr = [3,2,8,10,1];
quickSort(arr, 0, 4);
console.log(arr);
