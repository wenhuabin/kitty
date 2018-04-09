function f1(){
    let parr = [{t: 1000, v: 'a'}, {t: 4, v: 'b'}, {t: 50, v: 'c'}];
    
    parr.reduce((re, p)=>{
        return re.then(function(){
            return new Promise(function (resolve) {
              setTimeout(function () {
                  console.log(p.v)
                  resolve()
              }, p.t)
            })
        })
    }, Promise.resolve());
}


function f2(){
    let parr = [{t: 1000, v: 'a'}, {t: 4, v: 'b'}, {t: 50, v: 'c'}];
    let end = Promise.resolve();
    for(let i = 0; i< 3; i++){
        end = end.then(function(){
            return new Promise(function (resolve) {
              setTimeout(function () {
                  console.log(parr[i].v)
                  resolve()
              }, parr[i].t)
            })
        });
    }
}

f1()
f2()
