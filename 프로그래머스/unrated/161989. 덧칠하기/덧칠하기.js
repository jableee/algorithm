function solution(n, m, section) {
    var answer = 0;
    
    let max = 0
    section.forEach((s) => {
        if(s > max){
            max = s + m -1
            answer++
        }else {
            return
        }
    })
    
    return answer;
}