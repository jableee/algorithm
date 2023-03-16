function solution(s) {
    return answer = getOne(s, 0, 0);
}

function getOne(s, cnt, delcnt) {
    let deleteZero = delcnt
    cnt++
    
    let arr = s.split('').filter((c) => {
        if(c === '1') return c
        else if(c === '0') deleteZero++
    })
    
    let x = arr.length.toString(2)
    
    if(x === '1') return [cnt, deleteZero]
    else return getOne(x, cnt, deleteZero)
    
}