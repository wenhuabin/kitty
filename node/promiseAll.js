let sleep = (time, info) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
        console.log(info)
        resolve('this is ' + info)
    }, time)
  })
};

let loser = sleep(1000, 'loser');
let winner = sleep(4, 'winner');
let other = sleep(50, 'other');


// main
Promise.all([winner, loser, other]).then(value => {
    console.log("所有都完成后会执行then，它们是并行的哦: " + value)    // => 'this is winner'
});

//output : 各自代码执行根据时间决定，最后输出的结果时按数组的顺序
//
//winner
//other
//loser
//所有都完成后会执行then，它们是并行的哦: this is winner,this is loser,this is other

