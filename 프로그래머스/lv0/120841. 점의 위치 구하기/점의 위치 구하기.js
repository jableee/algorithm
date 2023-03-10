function solution(dot) {
    let answer = 0;
    
    if(dot[0] > 0){
        if(dot[1] > 0) return answer = 1
        else return answer = 4
    }else {
        if(dot[1] > 0) return answer = 2
        else return answer = 3
    }
    
    return answer;
}