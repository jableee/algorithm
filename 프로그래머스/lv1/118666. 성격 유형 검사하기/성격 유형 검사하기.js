function solution(survey, choices) {
    var answer = '';
    
    let score = new Map()
    score.set('R', 0)
    score.set('T', 0)
    score.set('C', 0)
    score.set('F', 0)
    score.set('J', 0)
    score.set('M', 0)
    score.set('A', 0)
    score.set('N', 0)
    
    for(let i=0; i<survey.length; i++){
        let first = survey[i].split('')[0]
        let second = survey[i].split('')[1]
        let num 
        
        switch(choices[i]){
            case 1: 
                num = score.get(first)
                score.set(first, num + 3)
                break;
            case 2:
                num = score.get(first)
                score.set(first, num + 2)
                break;
            case 3:
                num = score.get(first)
                score.set(first, num + 1)
                break;
            case 4: break;
            case 5:
                num = score.get(second)
                score.set(second, num + 1)
                break;
            case 6:
                num = score.get(second)
                score.set(second, num + 2)
                break;
            case 7: 
                num = score.get(second)
                score.set(second, num + 3)
                break;
        }
    }
    
    let r = score.get('R')
    let t = score.get('T')
    let c = score.get('C')
    let f = score.get('F')
    let j = score.get('J')
    let m = score.get('M')
    let a = score.get('A')
    let n = score.get('N')
    
    if(t > r) answer += 'T' 
    else answer += "R"
    if(f > c) answer += 'F' 
    else answer += "C"
    if(m > j) answer += 'M' 
    else answer += "J"
    if(n > a) answer += 'N' 
    else answer += "A"
    
    return answer;
}