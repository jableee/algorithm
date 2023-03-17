function solution(lottos, win_nums) {
    var answer = [];
    
    let matchCnt = 0
    let delNumCnt = 0
    
    lottos.forEach((x) => {
        if(x !== 0){
            if(win_nums.includes(x)) matchCnt++
        } else if (x === 0) {
            delNumCnt++
        }
    })
    
    switch(matchCnt){
        case 6: answer = [1, 1]
        break;
        case 5: answer = [2-delNumCnt, 2]
        break;
        case 4: answer = [3-delNumCnt, 3]
        break;
        case 3: answer = [4-delNumCnt, 4]
        break;
        case 2: answer = [5-delNumCnt, 5]
        break;
        case 1: answer = [6-delNumCnt, 6]
        break;
        case 0: if(delNumCnt === 6){ answer = [7-delNumCnt, 6] }
                else if(delNumCnt === 0) { answer = [6, 6] }
        break;
        default : return
    }
    
    return answer;
}
// 다른 사람의 풀이
// function solution(lottos, win_nums) {
//     const rank = [6, 6, 5, 4, 3, 2, 1];

//     let minCount = lottos.filter(v => win_nums.includes(v)).length;
//     let zeroCount = lottos.filter(v => !v).length;

//     const maxCount = minCount + zeroCount;

//     return [rank[maxCount], rank[minCount]];
// }
// 내가 생각한 핵심 : 맞춘 숫자의 갯수와 0의 갯수를 알수 있다. 이를 이용해 rank array를 생각하면 index를 통해 rank배열에서 등수정보를 가져올수 있다