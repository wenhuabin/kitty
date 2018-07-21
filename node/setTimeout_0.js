function f(){
    console.log('a');
    setImmediate(()=>console.log('b'));
    setTimeout(()=>console.log('c'), 1000);
    setImmediate(()=>console.log('d'));
    setTimeout(()=>console.log('e'), 0);
    setImmediate(()=>console.log('f'));
}

f();

// a, e, b, d, f, c



