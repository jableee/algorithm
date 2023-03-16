function solution(n, words) {
    var answer = [];
    
    let cnt = 1 // 반복횟수
    let check = 0 // 플레이순번 
    let Arr = [] // 사용한 단어
    
    answer = [0,0]
    
    for(let i=0; i<words.length; i++){
        if( i === 0 ) {
            check = 1
            Arr.push(words[i])
        } else {
            let preW = words[i-1].substr(-1)
            let nowW = words[i].substr(0,1)
            // console.log(i, words[i-1], words[i], preW, nowW)
            
            check++
            if(check > n) {
                check = 1
                cnt = cnt + 1
            }
            if(Arr.includes(words[i])){
                return answer = [check, cnt]
            }
            
            if(preW === nowW){
                Arr.push(words[i])
            } else {
                return answer = [check, cnt]
            }
        }
        
    }

    return answer ;
}