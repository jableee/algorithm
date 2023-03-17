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