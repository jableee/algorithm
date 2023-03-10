function solution(phone_number) {
    var answer = '';
    let privacy = phone_number.substr(0, phone_number.length-4)
    privacy = privacy.replace(/[0-9]/gi,'*')
    answer = privacy + phone_number.substr(-4)
    return answer;
}