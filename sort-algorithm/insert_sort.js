function swap(arr, i, j){
    let tmp = undefined;
    if(Array.isArray(arr) && i <= arr.length && i >= 0 && j <= arr.length && j >= 0){ 
        tmp = arr[i];
        arr[i] = arr[j]
        arr[j] = tmp;
    }
}

function insertSort(arr){
    if(!Array.isArray(arr)){
        return;
    }
    for(let i=1; i<arr.length; i++){
        for(let j=i; j>=0; j--){
            if(arr[j] < arr[j-1]){
                swap(arr, j, j-1);
            }else{
                break;
            }
        }
    }
}


let arr = [3,2,1];
insertSort(arr);
console.log(arr);


