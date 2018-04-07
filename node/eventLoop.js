function fn(){
    process.nextTick(()=> console.log('nexttick'));
    Promise.resolve()
        .then(
            ()=> console.log('promise1')
        ).then(
            ()=> console.log('promise2')
        );
    setImmediate(()=>console.log('immediate'));
    console.log('end');
}

fn()

//output
//
//end
//nexttick
//promise1
//promise2
//immediate
