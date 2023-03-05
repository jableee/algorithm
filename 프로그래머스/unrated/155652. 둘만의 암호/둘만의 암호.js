function solution(s, skip, index) {
    // 아스키 코드
    let answer = '';

    s = [...s]
    let sArr = s.map((x) => {
        return x.charCodeAt(0)
    })

    skip = [...skip]
    let skipArr = skip.map((x) => {
        return x.charCodeAt(0)
    })
    
    for(let i=0; i<sArr.length; i++){
        for(let j=0; j<index; j++){
            sArr[i]++
            while(skipArr.includes(sArr[i])){
                sArr[i]++
            }
            if(sArr[i] > 122){
                sArr[i] -= 26
            }
            while(skipArr.includes(sArr[i])){
                sArr[i]++
            }
        }
        
        answer = answer + String.fromCharCode(sArr[i])
    }
    
    return answer;
}