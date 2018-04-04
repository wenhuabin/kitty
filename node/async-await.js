
    //let sayHi = async function sayHi(){
    //let hi = await 'hello world';
    //return hi;  //等同于return Promise.resolve(hi);

async function f(){
    let a = Promise.resolve(44);
    return a;
}



function main(){
    console.log('before');
    f().then(result => {
      console.log(result);
    });
    console.log('after');
}

main();
