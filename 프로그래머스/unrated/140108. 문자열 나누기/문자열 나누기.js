function solution(s) {
    var answer = 0;
    
    const sArr = s.split('')
    answer = wordCount(sArr, []).length
    
    return answer;
}

function wordCount(strArr, wordArr) {
    let same = 0; 
    let diff = 0;
    
    for(let i=0; i<strArr.length; i++){
        if(strArr[i] === strArr[0]) { same++ }
        else { diff++ }
        
        if(i === strArr.length -1){
            wordArr.push(strArr.splice(0, same + diff).join())
            return wordArr
        }
        
        if(same === diff){
            wordArr.push(strArr.splice(0, same + diff).join())
            return wordCount(strArr, wordArr)
        }
    }
}