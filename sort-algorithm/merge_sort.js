
function mergeSort(arr, left, right, tmp){
    console.log(tmp);
    let mid;
    if(left < right){
        mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid, tmp);
        mergeSort(arr, mid + 1, right, tmp);
        merge(arr, left, mid, right, tmp);
    }

}

function merge(arr, left, mid, right, tmp){
    let i = left, j = mid + 1, k = left;
    while(i <= mid && j <= right){
        if(arr[i] <= arr[j]){
            tmp[k++] = arr[i++]
        }else{
            tmp[k++] = arr[j++]
        }
    }
    while(i <= mid)tmp[k++] = arr[i++];
    while(j <= right)tmp[k++] = arr[j++];
    for(let m = left; m <= right; m++){
        arr[m] = tmp[m];
    }
}


let arr = [3,2,8,10,1];
mergeSort(arr, 0, 4, [,,,,,]);
console.log(arr);
