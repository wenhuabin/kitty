/*
 * 给定N个物品和一个容量为C的背包,物品i的重量为Wi，其价值为Vi，背包问题是如何选择装入背包的物品，使得装入背包中物品的总价值最大。注意在背包问题中，可以将某种物品的一部分装入背包中，但是不可以重复装入。
 * 思路：先选单位质量高的物品，选完再选次高的
 */

function knapsack(w, v, c){
    let i, maxVal = 0, num = [];
    for(i = 0; w[i] < c; i++){
        num[i] = 1;
        maxVal += v[i];
        c = c - w[i];
    }
    num[i] = c > 0 ? c / w[i] : 0;
    maxVal += num[i] * v[i];
    console.log(num);
    return maxVal;
}


//w、v 已经按照单位价值排好序
let w = [1, 1, 2, 2, 2],
    v = [10, 8, 8, 3, 1],
    c = 5;

console.log(knapsack(w, v, c));


