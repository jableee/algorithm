function solution(s){
    var answer = true;
    // '(' > + && ')' > -
    let check = 0
    
    let strArr = s.split('')
    if(strArr[0] === ')') return answer = false
    if(strArr[strArr.length-1] === '(') return answer = false
    strArr.forEach((x) => {
        if(check < 0) return answer = false
        if(x === '(') check += 1
        else if(x === ')') check -= 1
    })
    
    if(check === 0) answer = true
    else answer = false

    return answer;
}