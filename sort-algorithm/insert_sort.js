//V8 引擎 sort 函数只给出了两种排序分别是： InsertionSort 和 QuickSort，数组长度小于等于 10 的用插入排序 InsertionSort，比10大的数组则使用快速排序 QuickSort 


function swap(arr, i, j){
    let tmp = undefined;
    if(Array.isArray(arr) && i <= arr.length && i >= 0 && j <= arr.length && j >= 0){ 
        tmp = arr[i];
        arr[i] = arr[j]
        arr[j] = tmp;
    }
}

//swap every time
function insertSort(arr){
    if(!Array.isArray(arr)){
        return;
    }
    for(let i=1; i<arr.length; i++){
        for(let j=i; j>0; j--){
            if(arr[j] < arr[j-1]){
                swap(arr, j, j-1);
            }else{
                break;
            }
        }
    }
}

//先做移动，再讲 arr[i] 直接放入对应位置
function insertSortO(arr){
    if(!Array.isArray(arr)){
        return;
    }
    for(let i=1; i<arr.length; i++){
        let tmp = arr[i];
        for(let j=i; j>=0; j--){
            //确保 j-1 不会溢出
            if(j > 0 && tmp < arr[j-1]){
                arr[j] = arr[j-1];
            }else{
                arr[j] = tmp;
                break;
            }
        }
    }
}

let arr = [3,2,8,10,1];
//insertSort(arr);
insertSortO(arr);
console.log(arr);


