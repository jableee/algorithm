/*
    <문제 설명>
    문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 
    이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, 
    A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
*/
/*
    <제한사항>
    0 < A의 길이 = B의 길이 < 100
    A, B는 알파벳 소문자로 이루어져 있습니다.
*/

// mysolution
/* 

*/
function solution(A, B) {
    var answer = 0;
    
    let str1 = A
    let num = 0
    
    for(let i=0; i<B.length; i++){
        if(str1 === B){
            break;
        }
        let lastStr = str1.charAt(str1.length-1)
        str1 = str1.slice(0, -1)
        str1 = lastStr + str1
        num++
        
        if(i === B.length-1 && str1 !== B){
            num = -1
        }
    }
    answer = num
    
    return answer;
}

// other solution

//1
/**
 * 문자열 밀기를 통해 결국은 a의 문자열과 동일한 문자를 밀어낸 b의 경우만 몇번 밀어낸 결과 인지 알 수 있다.
 * 이점을 이용해서 b+b를 해서 문자열에 a와 동일한 문자열이 있는지 체크를 하고 
 * indexOf()함수를 통해 해당 문자열이 b+b의 어디에 포함 되었냐로 몇번 밀어내기를 통해 a가 b가 되는지 알수 잇는 방법
 */
let solution=(a,b)=>(b+b).indexOf(a)

//2
/**
 * 내가 짠것과 로직은 유사
 * 좀 더 심플하고 보기 좋아 참고
 */
function solution(A, B) {
    if (A===B) return 0;
    for (let i = 0; i < A.length; i++) {
        A = A.slice(-1) + A.slice(0,-1);
        if (A === B) return i+1;
    }
    return -1;
}
