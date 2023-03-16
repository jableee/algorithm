function solution(brown, yellow) {
    var answer = [];
    // console.log(brown, yellow)
    for(let i=1; i<yellow + 1; i++){
        let width = yellow/i + 2
        let height = i + 2
        
        if((width - 2) * 2 + (height) * 2 === brown){
            return answer = [width, height]
        }else {
            continue
        }
    }
    
    return answer;
}