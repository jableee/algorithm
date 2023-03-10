function solution(today, terms, privacies) {
    var answer = [];
    
    let termsMap = new Map()
    for (let t of terms) {
        termsMap.set(...t.split(" "))
    }
    // console.log(termsMap)
    
    const todays = new Date(today)
    
    for(let i=0; i<privacies.length; i++){
        let info = privacies[i].split(' ')
        let term = Number(termsMap.get(info[1]))
        
        let endDate = new Date(info[0])
        endDate.setMonth(endDate.getMonth() + term)
        console.log(todays, endDate)
        if(endDate <= todays){
            answer.push(i+1)
        }
        
    }
    
    return answer;
}