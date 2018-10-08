//https://juejin.im/post/5935773fa0bb9f0058edbd61

let contains = document.contains ? function (parent, node){
    return parent != node && parent.contains(node);
} : function (parent, node){
    let result = parent !== node;
    if(!result) return result;
    while(node && (node = node.parentNode)){
        if(parent == node) return true;
    }
    return false;
};
