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
