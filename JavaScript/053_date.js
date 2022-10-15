Date()

let d = new Date()

d.getDate() //1부터시작
13
d.getMonth() // 0월 부터시작 +1 해야함
9
d.getDay() // 0부터 시작함 0은 일요일.
4


switch (d.getDay()) {
    case 0;
        console.log('일요일')
        break;
    case 1;
        console.log('일요일')
        break;    
}