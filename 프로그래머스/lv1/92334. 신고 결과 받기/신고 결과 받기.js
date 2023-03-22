function solution(id_list, report, k) {
    var answer = [];
    for(let i=0; i<id_list.length; i++){
        answer.push(0)
    }
    
    // report 중복제거
    let reportArr = [...new Set(report)]
    // report.forEach((x) => {
    //     if(!reportArr.includes(x)) reportArr.push(x)
    // })
    
    let banList = new Map()
    for(let i=0; i<reportArr.length; i++){
        let name = reportArr[i].split(' ')[1]
        if(!banList.has(name)){
            banList.set(name, 1)
        } else {
            let cnt = banList.get(name)
            banList.set(name, cnt + 1)
        }
    }
    
    let banArr = []
    for(let i=0; i<id_list.length; i++){
        if(banList.get(id_list[i]) > k-1 ) {
            banArr.push(id_list[i])
        }
    }
    // console.log(banArr)
    for(let i=0; i<reportArr.length; i++){
        let report = reportArr[i].split(' ')[1]
        let name = reportArr[i].split(' ')[0]
        if(banArr.includes(report)){
            answer[id_list.indexOf(name)] += 1
        }
    }
    
    // for(let i=0; i<reportArr.length; i++){
    //     let name = reportArr[i].split(' ')[0]
    //     let banName = reportArr[i].split(' ')[1]
    //     if(banList.get(banName) >= k) {
    //         let idx = id_list.indexOf(name)
    //         answer[idx] += 1
    //     }
    // }
     
    
    return answer;
}