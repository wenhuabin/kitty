
//timeout
var oldFetchfn = fetch; //拦截原始的fetch方法
window.fetch = function(input, opts){//定义新的fetch方法，封装原有的fetch方法
    return new Promise(function(resolve, reject){
        var timeoutId = setTimeout(function(){
            reject(new Error("fetch timeout"))
        }, opts.timeout);
        oldFetchfn(input, opts).then(
            res=>{
                clearTimeout(timeoutId);
                resolve(res)
            },
            err=>{
                clearTimeout(timeoutId);
                reject(err)
            }
        )
    })
}


//about
var oldFetchfn = fetch;
window.fetch = function(input, opts){
    return new Promise(function(resolve, reject){
        var abort_promise = function(){
            reject(new Error("fetch abort"))
        };
        var p = oldFetchfn(input, opts).then(resolve, reject);
        p.abort = abort_promise;
        return p;
    })
}

//promise race
var oldFetchfn = fetch; //拦截原始的fetch方法
window.fetch = function(input, opts){//定义新的fetch方法，封装原有的fetch方法
    var fetchPromise = oldFetchfn(input, opts);
    var timeoutPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
             reject(new Error("fetch timeout"))
        }, opts.timeout)
    });
    retrun Promise.race([fetchPromise, timeoutPromise])
}

//上面几种方法都是一种 hack， 并没有真正取消请求，只是丢弃了请求的结果。
