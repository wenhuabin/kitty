function swap(arr, i, j){
    let tmp = undefined;
    if(Array.isArray(arr) && i <= arr.length && i >= 0 && j <= arr.length && j >= 0){ 
        tmp = arr[i];
        arr[i] = arr[j]
        arr[j] = tmp;
    }
}


function selectSort(arr){
    for(let i=0; i<arr.length; i++){
        let index = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[index]){
                index = j;
            }
        }
        i != index && swap(arr, i, index);
    }
}


let arr = [3,2,8,10,1];
selectSort(arr);
console.log(arr);
