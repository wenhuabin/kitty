function getNextArr(s, next){
    for(let i=0; i < s.length; i++){
        if(i == 0){
            //第一个字符的为 0
            next[i] = 0;
        }else if(next[i-1] > 0){
            if(s[i] === s[next[i-1]]){
                /*
                 * 当前字符和前序字符串前后缀最长公共子串后一个字符相同时，+1,
                 * 这个也是 next 的核心
                 */
                next[i] = next[i-1] + 1;
            }else if(s[i] === s[0]){
                next[i] = 1;
            }else{
                next[i] = 0;
            }
        }else if(next[i-1] == 0 && s[i] === s[0]){
            next[i] = 1;
        }else{
            next[i] = 0;
        }
    }
}

function indexKMP(src, target){
    let i = 0,
        j = 0,
        next = [],
        slen = src.length,
        tlen = target.length;
    getNextArr(target, next);

    console.log(next);
    //return -1;
    
    while(i < slen && j < tlen){
        //如果 i 之后的字符个数小于 j 之后的字符个数，匹配失败，提前结束
        if(slen - i < tlen -j) break;
        if(src[i] === target[j]){
            //相等时，继续进行下一个字符的匹配
            i++;
            j++;
        }else if(j > 0){
            //当 j > 0 是，字符串不相等，j 回退到 next[j-1] 的位置，等同于 target 字符串跳 j 前面字符串长度 - next[j-1]
            j = next[j-1];
        }else{
            //都不匹配，j 重新开始， i 挪到下一个位置
            i++;
            j = 0;
        }
    }
    console.log(i, j);
    return j === tlen ? i - tlen: -1;
}

//let s = 'agctagcagctagct',
//    t = 'gct';
let s = 'BBC ABCDAB ABCDABCDABDE',
    t = 'ABCDABD';
console.log(indexKMP(s, t));
//getNextArr(s, next);
//console.log(s.split(''));
//console.log(next.toString().split(','));
//console.log('\n');
//console.log(next);
