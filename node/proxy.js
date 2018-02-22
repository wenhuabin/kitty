var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});


obj.count = 1
//output
//    setting count!
//1
//output
++ obj.count
//output
// getting count!
// setting count!
//2
//output



