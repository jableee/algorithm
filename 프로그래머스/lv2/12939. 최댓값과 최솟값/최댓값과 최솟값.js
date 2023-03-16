function solution(s) {
    var answer = '';
    
    let max
    let min
    let numArr = s.split(' ')

    numArr.forEach((x) => {
        let num = Number(x)
        if(!max && !min){
            max = num 
            min = num
        }
        if(max < num) max = num
        if(min > num) min = num
    })
    
    answer = min + ' ' + max
    
    return answer;
}