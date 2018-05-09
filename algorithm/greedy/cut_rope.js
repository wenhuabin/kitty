/*
 * 给你一个长度为n的绳子，请把绳子剪成m段（m，n都是整数，且都大于1）每段绳子的长度即为K[0],K[1],K[2]...K[m]。请问K[0]*k[1]..*k[m]可能的最大乘积是多少？
 * 思路：如果我们按照如下的策略剪绳子,则得到的各段绳子的长度的乘积将最大;当n>=5,我们尽可能地剪长度为3的绳子;当剩下的绳子长度为4时,把绳子剪为长度为2的绳子.
 *
*/

function cutRope(n){
    if(n < 2){
        return 0;
    }
    if(n === 2){
        return 1;
    }
    if(n === 3){
        return 2;
    }
    let times2 = 0,
        times3 = Math.floor(n / 3);
    if(n % 3 === 1){
        times3--;
        times2 = 2;
    }
    console.log(times3, times2);
    return Math.pow(3, times3) * Math.pow(2, times2);
}

console.log(cutRope(10));
console.log(cutRope(12));
