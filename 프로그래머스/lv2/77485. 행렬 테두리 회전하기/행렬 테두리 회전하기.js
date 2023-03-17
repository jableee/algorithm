function solution(rows, columns, queries) {

    let board = new Array(rows)
    let num = 1
    for(let i=0; i<rows; i++){
        board[i] = new Array(columns)
        for(let j=0; j<columns; j++){
            board[i][j] = num
            num++
        }
    }
    
    return change(board, queries, []);
}

function change(board, queries){
    let result = []
    
    for(let i=0; i<queries.length; i++){
        let nums = []
        let locate = []
        
        let startX = queries[i][0] - 1
        let startY = queries[i][1] - 1
        let endX = queries[i][2] - 1
        let endY = queries[i][3] - 1
        
        let x = startX 
        let y = startY
        while(y <= endY) {
            nums.push(board[x][y])
            locate.push({x: x, y: y})
            y++
        }
        y--
        while(x < endX){
            nums.push(board[x][y])
            locate.push({x: x, y: y})
            x++
        }
        while(y >= startY){
            nums.push(board[x][y])
            locate.push({x: x, y: y})
            y--
        }
        y++
        while(x >= startX){
            nums.push(board[x][y])
            locate.push({x: x, y: y})
            x--
        }
        x++

        let numArr = []
        nums.forEach((x) => {
            if(!numArr.includes(x)){ numArr.push(x) }
        })
        let lastNum = numArr.pop()
        numArr.unshift(lastNum)
        
        let locateArr = [...new Set(locate.map(JSON.stringify))].map(JSON.parse)

        for(let i=0; i<locateArr.length; i++){
            let locX = locateArr[i].x
            let locY = locateArr[i].y
            board[locX][locY] = numArr[i]
        }
        
        result.push(Math.min(...numArr))
    }
    return result
    
}